import axios from 'axios';

export default async function handler(req, res) { 
   const url = "aaa"
   const token = "aaa"
   const data = {}

   try{
    const headers = {
        'x-Shopify-Access-Token': token,
        'content-Type': 'application/json'
    };

    const response =  await axios.post(url, data, {headers})

    return res.status(200).json({message: 'produto criado'})

  } catch (e) {
    console.log(e)}
}