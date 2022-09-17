import yqRequest from "..";

export function getHomeGoodPriceData() {
  return yqRequest.get({
    url: "/home/goodprice"
  })
}

export function getHomeHighScoreData() {
  return yqRequest.get({
    url: "/home/highscore"
  })
}

export function getHomeDiscountData() {
  return yqRequest.get({
    url: "/home/discount"
  })
}

export function getHomeHotRecommendData() {
  return yqRequest.get({
    url: "/home/hotrecommenddest"
  })
}