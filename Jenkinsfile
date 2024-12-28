pipeline {
    agent any

    tools {
        // nodejs 'NodeJS-v22.11.0' // Ensure this matches the name configured in Jenkins' Global Tool Configuration
        // nodejs 'nodejs' // Ensure this matches the name configured in Jenkins' Global Tool Configuration
        nodejs 'NodeJS' // Ensure this matches the name configured in Jenkins' Global Tool Configuration
    }

    environment {
        NPM_CONFIG_LOGLEVEL = 'warn' // Optional: Customize NPM log level
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Clone the repository
                git url: 'https://github.com/JeralSandeeptha/Irusri-Coding-Assignment', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                // Build the Node.js project (adjust this command for your project)
                sh 'npm run build'
            }
        }

        stage('Archive Artifacts') {
            steps {
                // Archive build artifacts, if any
                archiveArtifacts artifacts: 'dist/**/*', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'Build succeeded weddo!'
        }
        failure {
            echo 'Build failed modayo!'
        }
    }
}
