const secrets = require('./keys/secrets')

module.exports = {
  deepfacts_api_key: process.env.deepfacts_api_key || secrets.deepfacts_api_key,
  gcp_client_email: process.env.gcp_client_email || secrets.gcp_client_email,
  gcp_private_key: process.env.gcp_private_key || secrets.gcp_private_key,
  gcp_project_id: process.env.gcp_project_id || secrets.gcp_project_id
}