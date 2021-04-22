import React from "react";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./Widgets.css";

function Widgets() {
  const newsArticle = (heading, subTitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subTitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoOutlinedIcon />
      </div>
      {newsArticle(
        "React JS",
        "Community enlarges 10 times greater than before."
      )}
      {newsArticle("broskie", "Community enlarges more than before @broskie.")}
      {newsArticle("Google", "Hiring at Google, role Sr.Developer.")}
      {newsArticle(
        "Javascript",
        "Community enlarges 10 times greater than before."
      )}
      {newsArticle(
        "Apple",
        "Apple conducting its event this week, Introducing its new products to the market."
      )}
    </div>
  );
}

export default Widgets;
