import fetch from 'node-fetch';
import chalk from 'chalk';

let now= new Date();
console.log(chalk.bgCyanBright(now.toLocaleString()));

// Correr con el siguiente comando:
// node test.js

const getData = async () => {
  try {
    const response = await fetch("https://www.facebook.com/api/graphql/", {
      "headers": {
        "accept": "*/*",
        "accept-language": "es",
        "content-type": "application/x-www-form-urlencoded",
        "sec-ch-prefers-color-scheme": "light",
        "sec-ch-ua": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"107\", \"Not;A=Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "viewport-width": "1536",
        "x-fb-friendly-name": "CometMarketplaceSearchContentPaginationQuery",
        "x-fb-lsd": "bL0Lu21YVgMiPNnAuv9Cbj",
        "cookie": "sb=abVrY-YNHw44XOEL-DXZM1jL; wd=1536x700; dpr=1.25; datr=abVrYwnQXaNlbYwsKQMwYydg; c_user=100086515548463; xs=10%3AAcTyt32dV0ZvUQ%3A2%3A1668003185%3A-1%3A-1; fr=0U7VlKzLZh06sQwJt.AWX1yoBCicJ7JuHAx7_gGkf55oM.Bja7Vp.CM.AAA.0.0.Bja7Vx.AWVIGJlLsBY; presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1668003208164%2C%22v%22%3A1%7D",
        "Referer": "https://www.facebook.com/marketplace/category/exercise-fitness",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": "av=100086515548463&__user=100086515548463&__a=1&__dyn=7AzHxqU5a5Q1ryUbFuC0BVU98nwgU7SbzEdEc8co2qwJxS0gu3y4o1DU2_CxS320om782Cwwwqo465o-cw5MKdwGxu782lwv89kbxS2218wc61axe3S1lwlE-UqwsUkxe2GewGwkUtxGm2SUbElxm1Wxfxmu3W3y1MBx_wHwfCm2Sq2-azo2NwkQ0z8c84K2e3u362-2B0oobo8o&__csr=gjb8OZQAim-WFibsOqSxf9kOr--QLO49Gy6aJpdXZArTqkEDpqFkB-Gp9eO2mpx5aVVpiaWzl-u-AGCyV9Foy59UF3FA4ES9zF8aVkcyEKi2G8UpAyUvDwBxpafxm8wlQezum13z84GawWG5Eox60YU7e1WweW26E2mw966U0BO782Bw3Po05-i00FS80p5w1qC027a01NFw4Rw1Gq0d7w3XU1rUpw&__req=u&__hs=19305.HYP%3Acomet_pkg.2.1.0.2.1&dpr=1.5&__ccg=EXCELLENT&__rev=1006573289&__s=dqsrbh%3Ahk1xba%3Ag3myeu&__hsi=7164019177268354148&__comet_req=15&fb_dtsg=NAcOBIoJT5MdbZrYs1z2oEGvtfOm9vn2QVLie2i2H-U0SHVdYj3GRyA%3A10%3A1668003185&jazoest=25357&lsd=bL0Lu21YVgMiPNnAuv9Cbj&__aaid=1144247129853642&__spin_r=1006573289&__spin_b=trunk&__spin_t=1668003196&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=CometMarketplaceSearchContentPaginationQuery&variables=%7B%22count%22%3A24%2C%22cursor%22%3A%22%7B%5C%22pg%5C%22%3A1%2C%5C%22cf%5C%22%3A%7B%5C%22basic%5C%22%3A%7B%5C%22item_index%5C%22%3A44%7D%2C%5C%22ads%5C%22%3A%7B%5C%22items_since_last_ad%5C%22%3A4%2C%5C%22items_retrieved%5C%22%3A48%2C%5C%22ad_index%5C%22%3A8%2C%5C%22ad_slot%5C%22%3A8%2C%5C%22dynamic_gap_rule%5C%22%3A0%2C%5C%22counted_organic_items%5C%22%3A0%2C%5C%22average_organic_score%5C%22%3A0%2C%5C%22is_dynamic_gap_rule_set%5C%22%3Afalse%2C%5C%22first_organic_score%5C%22%3A0%2C%5C%22is_dynamic_initial_gap_set%5C%22%3Afalse%2C%5C%22iterated_organic_items%5C%22%3A0%2C%5C%22top_organic_score%5C%22%3A0%2C%5C%22feed_slice_number%5C%22%3A2%2C%5C%22feed_retrieved_items%5C%22%3A48%2C%5C%22ad_req_id%5C%22%3A370002450%2C%5C%22refresh_ts%5C%22%3A0%2C%5C%22cursor_id%5C%22%3A24020%2C%5C%22mc_id%5C%22%3A0%2C%5C%22ad_index_e2e%5C%22%3A0%2C%5C%22seen_ads%5C%22%3A%5B1527302724245991%2C6292247024022%2C23851388754910045%2C23852739707960000%2C23852137340530248%2C128740735343868%2C130287678273%2C102233875751940%2C175067819212798%5D%2C%5C%22has_ad_index_been_reset%5C%22%3Afalse%2C%5C%22is_reconsideration_ads_dropped%5C%22%3Afalse%7D%2C%5C%22boosted_ads%5C%22%3A%7B%5C%22items_since_last_ad%5C%22%3A0%2C%5C%22items_retrieved%5C%22%3A48%2C%5C%22ad_index%5C%22%3A0%2C%5C%22ad_slot%5C%22%3A0%2C%5C%22dynamic_gap_rule%5C%22%3A0%2C%5C%22counted_organic_items%5C%22%3A0%2C%5C%22average_organic_score%5C%22%3A0%2C%5C%22is_dynamic_gap_rule_set%5C%22%3Afalse%2C%5C%22first_organic_score%5C%22%3A0%2C%5C%22is_dynamic_initial_gap_set%5C%22%3Afalse%2C%5C%22iterated_organic_items%5C%22%3A0%2C%5C%22top_organic_score%5C%22%3A0%2C%5C%22feed_slice_number%5C%22%3A0%2C%5C%22feed_retrieved_items%5C%22%3A0%2C%5C%22ad_req_id%5C%22%3A0%2C%5C%22refresh_ts%5C%22%3A0%2C%5C%22cursor_id%5C%22%3A47253%2C%5C%22mc_id%5C%22%3A0%2C%5C%22ad_index_e2e%5C%22%3A0%2C%5C%22seen_ads%5C%22%3A%5B%5D%2C%5C%22has_ad_index_been_reset%5C%22%3Afalse%2C%5C%22is_reconsideration_ads_dropped%5C%22%3Afalse%7D%2C%5C%22lightning%5C%22%3A%7B%5C%22initial_request%5C%22%3Afalse%2C%5C%22top_unit_item_ids%5C%22%3Anull%2C%5C%22ranking_signature%5C%22%3Anull%2C%5C%22qid%5C%22%3Anull%7D%7D%2C%5C%22rcf%5C%22%3A%7B%5C%22basic%5C%22%3A%7B%5C%22item_index%5C%22%3A0%7D%2C%5C%22ads%5C%22%3A%7B%5C%22items_since_last_ad%5C%22%3A0%2C%5C%22items_retrieved%5C%22%3A0%2C%5C%22ad_index%5C%22%3A0%2C%5C%22ad_slot%5C%22%3A0%2C%5C%22dynamic_gap_rule%5C%22%3A0%2C%5C%22counted_organic_items%5C%22%3A0%2C%5C%22average_organic_score%5C%22%3A0%2C%5C%22is_dynamic_gap_rule_set%5C%22%3Afalse%2C%5C%22first_organic_score%5C%22%3A0%2C%5C%22is_dynamic_initial_gap_set%5C%22%3Afalse%2C%5C%22iterated_organic_items%5C%22%3A0%2C%5C%22top_organic_score%5C%22%3A0%2C%5C%22feed_slice_number%5C%22%3A0%2C%5C%22feed_retrieved_items%5C%22%3A0%2C%5C%22ad_req_id%5C%22%3A0%2C%5C%22refresh_ts%5C%22%3A0%2C%5C%22cursor_id%5C%22%3A48796%2C%5C%22mc_id%5C%22%3A0%2C%5C%22ad_index_e2e%5C%22%3A0%2C%5C%22seen_ads%5C%22%3A%5B%5D%2C%5C%22has_ad_index_been_reset%5C%22%3Afalse%2C%5C%22is_reconsideration_ads_dropped%5C%22%3Afalse%7D%2C%5C%22boosted_ads%5C%22%3A%7B%5C%22items_since_last_ad%5C%22%3A0%2C%5C%22items_retrieved%5C%22%3A0%2C%5C%22ad_index%5C%22%3A0%2C%5C%22ad_slot%5C%22%3A0%2C%5C%22dynamic_gap_rule%5C%22%3A0%2C%5C%22counted_organic_items%5C%22%3A0%2C%5C%22average_organic_score%5C%22%3A0%2C%5C%22is_dynamic_gap_rule_set%5C%22%3Afalse%2C%5C%22first_organic_score%5C%22%3A0%2C%5C%22is_dynamic_initial_gap_set%5C%22%3Afalse%2C%5C%22iterated_organic_items%5C%22%3A0%2C%5C%22top_organic_score%5C%22%3A0%2C%5C%22feed_slice_number%5C%22%3A0%2C%5C%22feed_retrieved_items%5C%22%3A0%2C%5C%22ad_req_id%5C%22%3A0%2C%5C%22refresh_ts%5C%22%3A0%2C%5C%22cursor_id%5C%22%3A2125%2C%5C%22mc_id%5C%22%3A0%2C%5C%22ad_index_e2e%5C%22%3A0%2C%5C%22seen_ads%5C%22%3A%5B%5D%2C%5C%22has_ad_index_been_reset%5C%22%3Afalse%2C%5C%22is_reconsideration_ads_dropped%5C%22%3Afalse%7D%2C%5C%22lightning%5C%22%3A%7B%5C%22initial_request%5C%22%3Atrue%2C%5C%22top_unit_item_ids%5C%22%3Anull%2C%5C%22ranking_signature%5C%22%3Anull%2C%5C%22qid%5C%22%3Anull%7D%7D%2C%5C%22ncfp%5C%22%3Afalse%2C%5C%22ncfr%5C%22%3Afalse%2C%5C%22cfrh%5C%22%3Atrue%7D%22%2C%22params%22%3A%7B%22bqf%22%3A%7B%22callsite%22%3A%22COMMERCE_MKTPLACE_SEO%22%2C%22query%22%3A%22%22%7D%2C%22browse_request_params%22%3A%7B%22commerce_enable_local_pickup%22%3Atrue%2C%22commerce_enable_shipping%22%3Atrue%2C%22commerce_search_and_rp_available%22%3Atrue%2C%22commerce_search_and_rp_category_id%22%3A%5B%5D%2C%22commerce_search_and_rp_condition%22%3Anull%2C%22commerce_search_and_rp_ctime_days%22%3Anull%2C%22filter_location_latitude%22%3A-12.0611%2C%22filter_location_longitude%22%3A-77.0353%2C%22filter_price_lower_bound%22%3A0%2C%22filter_price_upper_bound%22%3A214748364700%2C%22filter_radius_km%22%3A60%7D%2C%22custom_request_params%22%3A%7B%22browse_context%22%3Anull%2C%22contextual_filters%22%3A%5B%5D%2C%22referral_code%22%3Anull%2C%22saved_search_strid%22%3Anull%2C%22search_vertical%22%3Anull%2C%22seo_url%22%3A%22exercise-fitness%22%2C%22surface%22%3A%22TOPIC_PAGE%22%2C%22virtual_contextual_filters%22%3A%5B%5D%7D%7D%2C%22scale%22%3A1.5%7D&server_timestamps=true&doc_id=6300438633305058' content-length: 6107",
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
    });

    const data = await response.json();

    // console.log(data)

    var listing_price = ''
    var listing_location = ''
    var marketplace_listing_title = ''
    var marketplace_listing_seller = ''


    for (const edge of data.data.marketplace_search.feed_units.edges) {
      if (edge.node) {
        listing_price = edge.node.listing.listing_price.amount
        listing_location = edge.node.listing.location.reverse_geocode.city
        marketplace_listing_title = edge.node.listing.marketplace_listing_title
        marketplace_listing_seller = edge.node.listing.marketplace_listing_seller.name
        console.log(listing_price, listing_location, marketplace_listing_title, marketplace_listing_seller);
      }
    }
  } catch (e) {
    console.log("Error happened", e);
  }
};

getData();