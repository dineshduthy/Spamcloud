pipeline {
    agent any

    environment {
        IMAGE_NAME = "nodejs-app"
        CONTAINER_NAME = "nodejs-app"
        HOST_PORT = "4200"
        CONTAINER_PORT = "4200"
    }

    stages {

        stage('Checkout Source') {
            steps {
                checkout scm
            }
        }

        stage('Show Workspace') {
            steps {
                sh '''
                pwd
                ls -lah
                '''
            }
        }

        stage('Node Version') {
            steps {
                sh '''
                node -v
                npm -v
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Application') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                docker build -t ${IMAGE_NAME}:latest .
                '''
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                docker rm -f ${CONTAINER_NAME} || true
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh '''
                docker run -d \
                  --name ${CONTAINER_NAME} \
                  -p ${HOST_PORT}:${CONTAINER_PORT} \
                  --restart unless-stopped \
                  ${IMAGE_NAME}:latest
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh '''
                echo "Running Containers:"
                docker ps

                echo ""
                echo "Application Logs:"
                docker logs --tail=20 ${CONTAINER_NAME}
                '''
            }
        }
    }

    post {

        success {
            echo '===================================='
            echo 'CI/CD Pipeline Completed Successfully'
            echo 'Application deployed successfully.'
            echo '===================================='
        }

        failure {
            echo '===================================='
            echo 'CI/CD Pipeline Failed'
            echo 'Check the console output for errors.'
            echo '===================================='
        }

        always {
            cleanWs()
        }
    }
}
