!function(retailrocket, $) {
  'use strict';

  function getCurrentSegment(segments) {
    var visitorId = retailrocket.api.getPartnerVisitorId();
    var portionsSum = 0;
    var result = false;
    var currentSegmentPortion;

    if (visitorId > 0) {
      currentSegmentPortion = visitorId % 100;
      for (var i = 0; i < segments.length; i++) {
        portionsSum += Number(segments[i].portion);
        if (portionsSum >= currentSegmentPortion) {
          result = segments[i].segmentId;
          break;
        }
      }
    }

    return result;
  }

}(retailrocket);