import React from "react";
import { timelineData } from "@/lib/timeLine";
import classes from "./timeline.module.css";
import TranslationsProvider from "../TranslationProvider";
import initTranslations from "@/app/i18n";

const i18nNamespaces = ["timeline"];

const Timeline = async ({ locale }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <div className={classes.timeline}>
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`${classes.container} ${
              index % 2 === 0 ? classes.leftContainer : classes.rightContainer
            }`}
          >
            <span className={classes.icon}>{item.icon}</span>
            <div className={classes.textBox}>
              <h2>{t(item.title)}</h2>
              <small>{t(item.date)}</small>
              <p>{t(item.description)}</p>
            </div>
            <span
              className={
                index % 2 === 0
                  ? classes.leftContainerArrow
                  : classes.rightContainerArrow
              }
            ></span>
          </div>
        ))}
      </div>
    </TranslationsProvider>
  );
};

export default Timeline;
