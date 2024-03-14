import React from "react";
import "../stylesheet/break.css";

function Breaknews() {
  return (
    <>
      <div className="col-lg-12">
        <div className="news-tracker-wrap">
          <h6 className="desk">
            <span>Breaking News</span>
            {/* <i className="fa fa-pencil"></i> */}
          </h6>
          <div className="bg-color">
            <marquee>
              <div className="contentbr">
                நான் வடிவேலுவின் தீவிர ரசிகன். அவரது மேனரிசங்களை அப்படியே
                செய்வது எனக்கு பிடிக்கும். அப்படி ஒருமுறை, ஒரு படத்தில் எனது
                குருநாதரான நடிகர் வடிவேலுவின்
              </div>
            </marquee>
          </div>
          {/* <div className="main">
            <div className="divbody">
              <div class="content">
                <div class="marquee">
                  <div class="marquee__inner">
                    <div class="marquee__part">
                      சிங்கம் களமிறங்கிடுச்சு.. பட்ஜெட் விலையில் டாப் கிளாஸ்
                      அம்சங்கள்.. ஜூலை 7ல் அறிமுகமாகும் புதிய Samsung போன்!•
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Breaknews;
