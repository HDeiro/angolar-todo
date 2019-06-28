package app

import (
	"fmt"
	"net/http"
	"strings"
	"time"

	//"strings"
	"context"
	"os"

	"github.com/AAGAraujo/angolar-todo/server/models"
	u "github.com/AAGAraujo/angolar-todo/server/utils"
	jwt "github.com/dgrijalva/jwt-go"
)

var JwtAuthentication = func(next http.Handler) http.Handler {

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		notAuth := []string{"/user", "/login"} //List of endpoints that doesn't require auth
		requestPath := r.URL.Path              //current request path

		//check if request does not need authentication, serve the request if it doesn't need it
		for _, value := range notAuth {

			if value == requestPath && r.Method == http.MethodPost {
				next.ServeHTTP(w, r)
				return
			}
		}

		response := make(map[string]interface{})
		tokenHeader := r.Header.Get("Authorization") //Grab the token from the header

		if tokenHeader == "" { //Token is missing, returns with error code 403 Unauthorized
			response = u.Message(false, "Missing auth token")
			u.Respond(w, response, http.StatusForbidden)
			return
		}

		splitted := strings.Split(tokenHeader, " ") //The token normally comes in format `Bearer {token-body}`, we check if the retrieved token matched this requirement
		if len(splitted) != 2 {
			response = u.Message(false, "Invalid/Malformed auth token")
			u.Respond(w, response, http.StatusForbidden)
			return
		}

		tokenPart := splitted[1] //Grab the token part, what we are truly interested in
		tk := &models.Token{}

		token, err := jwt.ParseWithClaims(tokenPart, tk, func(token *jwt.Token) (interface{}, error) {
			return []byte(os.Getenv("token_password")), nil
		})

		if err != nil { //Malformed token, returns with http code 403 as usual
			response = u.Message(false, "Malformed authentication token")

			u.Respond(w, response, http.StatusForbidden)
			return
		}

		if !token.Valid { //Token is invalid, maybe not signed on this server
			response = u.Message(false, "Token is not valid.")

			u.Respond(w, response, http.StatusForbidden)
			return
		}
		if getTokenRemainingValidity(tk.ExpirationTime) {
			response = u.Message(false, "The token has expired")
			u.Respond(w, response, http.StatusForbidden)
			return
		}

		//Everything went well, proceed with the request and set the caller to the user retrieved from the parsed token
		ctx := context.WithValue(r.Context(), "user", tk.UserID)
		r = r.WithContext(ctx)
		next.ServeHTTP(w, r) //proceed in the middleware chain!
	})
}

func getTokenRemainingValidity(timeToken interface{}) bool {
	if validity, ok := timeToken.(int64); ok {
		tm := time.Unix(validity, 0)
		remainer := tm.Sub(time.Now()).Seconds()
		fmt.Printf("Remain time: %f", remainer)
		if remainer > 0 {
			return false
		}
	}
	return true
}
