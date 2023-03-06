package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	var err error

	_webPort := os.Getenv("WEB_PORT")
	_isHttps := os.Getenv("USE_TLS") == "true"

	stage := os.Getenv("STAGE")
	if stage == "prod" {
		gin.SetMode(gin.ReleaseMode)
	}

	router := gin.Default()

	// Обслуживание статических файлов
	static := os.Getenv("STATIC")
	router.StaticFS("/", http.Dir(static))

	//Логирование
	router.Use(gin.Logger())

	// Recovery middleware recovers from any panics and writes a 500 if there was one.
	router.Use(gin.Recovery())

	switch _isHttps {
	case true: // HTTPS включен
		log.Printf("gin RunTLS at port: %s", _webPort)

		err := router.RunTLS(":"+_webPort, "cert.pem", "key.pem")
		if err != nil {
			log.Fatalf("error while starting gin with HTTPS, message: %s", err)
		}
	default: // HTTPS выключен
		log.Printf("gin Run at port: %s", _webPort)

		err = router.Run(":" + _webPort)
		if err != nil {
			log.Fatalf("error while starting gin, message: %s", err)
		}
	}
}
