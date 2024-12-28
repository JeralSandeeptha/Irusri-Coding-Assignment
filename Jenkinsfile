pipeline {
    agent any
    tools {
        nodejs "NodeJS-v22.11.0" // Use the NodeJS version configured in Jenkins
    }
    environment {
        CI = 'true' // Set CI environment variable
    }
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/JeralSandeeptha/Irusri-Coding-Assignment'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
    post {
        always {
            echo 'Pipeline execution complete!'
        }
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
