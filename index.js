// const fetch = require("node-fetch")

import fetch from 'node-fetch';

const fetchData = async () => {
    try {
        const response = await fetch("https://www.facebook.com/api/graphql/", {
        "headers": {
            "accept": "*/*",
            "accept-language": "es",
            "content-type": "application/x-www-form-urlencoded",
            "sec-ch-prefers-color-scheme": "light",
            "sec-ch-ua": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "viewport-width": "1920",
            "x-fb-friendly-name": "CometMarketplaceSearchContentContainerQuery",
            "x-fb-lsd": "uEdTyYl1F7b7Wtz9EvpsN6"
        },
        "referrer": "https://www.facebook.com/marketplace/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "av=100086515548463&__user=100086515548463&__a=1&__dyn=7AzHxqU5a5Q1ryUbFuC0BVU98nwgU7SbzEdEc8co2qwJxS0gu3y4o1DU2_CxS320om782Cwwwqo465o-cw5MKdwGxu782lwv89kbxS2218wc61axe3S1lwlE-UqwsUkxe2GewGwkUtxGm2SUbElxm1Wxfxmu3W3y1MBx_wHwfCm2Sq2-azo2NwkQ0z8c84K2e3u362-2B0oobo&__csr=gk8B4QTGJdcCiDZl4Zt8JimHhkADPKyulHTl9brAVuBO97h4WhKGjHQ9IBrUgykXVoDmXAQcGUJ6h948iUxai8ykdKECe_hoCUbUbEW9Axy2iUjz-12XAxG9zUy6EnwLyocUtwh4ewTx68w9S0SEhwsUuweK0Bo5-1ww5_way0p60vS00i6S2O0g6023O7o0RS033W02_O2y0aCw1lG0GU&__req=k&__hs=19291.HYP%3Acomet_pkg.2.1.0.2.1&dpr=1.5&__ccg=EXCELLENT&__rev=1006467084&__s=bmn7ij%3A64mh4h%3Apfb363&__hsi=7158823984609111494&__comet_req=15&fb_dtsg=NAcMBYkcMoMD7lIaLRPcRNpt-4tFnCwu4dag3VYpMSJfXL7Xfd-8HVg%3A3%3A1666793586&jazoest=25368&lsd=wuPcQZXBlQjlwMB8yFl6Hw&__aaid=1144247129853642&__spin_r=1006467084&__spin_b=trunk&__spin_t=1666793596&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=useRainbowNativeSurveyDialogPlatformIntegrationPointQuery&variables=%7B%22integration_point_id%22%3A%222673783352943916%22%2C%22survey_context_data%22%3A%5B%5D%2C%22scale%22%3A1.5%2C%22session_id%22%3Anull%7D&server_timestamps=true&doc_id=6626849040663745",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });

    const { data } = await response.json();
    for(const edge of data.data.marketplace_search.feed_units.edges){
        if (edge.node) {
            console.log(edge.node.listing.marketplace_listing_title);
        }
    }
    } catch (e) {
        console.log("Error happened", e);
    } 
};

fetchData();