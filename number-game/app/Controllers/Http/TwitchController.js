'use strict'

const Env = use('Env')
const axios = require('axios');
const Database = use('Database');

class TwitchGroupController {
    
    
    
    readTwitchTokenFromServer() {
        return new Promise(async (resolve, reject) => {
            const url = `${Env.get('TWITCH_AUTH_API')}/oauth2/token?client_id=${Env.get('TWITCH_CLIENT_ID')}&client_secret=${Env.get('TWITCH_CLIENT_SECRET')}&grant_type=client_credentials`;
            try {
                const td = await axios.post(url);
                resolve(td.data);
            } catch (err) {
                resolve(null);
            }    
        })
    }
    
    
    async getTwitchToken(session) {
        const p = session.get('twitch_auth_object')
        if (!p) {
            const token = await this.readTwitchTokenFromServer();
            session.put('twitch_auth_object', token);
            const d = new Date();
            const n = d.getTime();
            const exp_time = n + token.expires_in;
            session.put('twitch_auth_expiry', exp_time);
            return token.access_token;
        } else {
            const tm = session.get('twitch_auth_expiry');
            const d = new Date();
            const n = d.getTime();
            if (n > tm) {
                const token = await this.readTwitchTokenFromServer();
                session.put('twitch_auth_object', token);
                const d = new Date();
                const n = d.getTime();
                const exp_time = n + token.expires_in;
                session.put('twitch_auth_expiry', exp_time);
                return token.access_token;
            } else {
                return p.access_token;
            }
        }
        // first see if its in the session.

    }
    async getTwitchGroupInfo({ session, response, request }) {
        
        const subdomain = request.only('name');
        const subdomain_response = await Database.select('*').from('rosters').where('sub_domain',`${subdomain}`);
        return subdomain 
        var viewcount = 0; 
        for(var i=0;i<len(subdomain_response);i++){
            if(subdomain_reponse[i].)

        }
        const url = `${Env.get('TWITCH_API')}/users?login=${data.name}`;
        const token = await this.getTwitchToken(session);
       
    }
    async getRosterIndividuals({}){

    }


}
module.exports = TwitchController
