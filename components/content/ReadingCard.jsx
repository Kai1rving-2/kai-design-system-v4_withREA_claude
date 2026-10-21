import React from 'react';

export function ReadingCard({ tag, date, title, lead, children, readLabel = '继续阅读', readHref, readTime }) {
  return (
    <article className="kai-reading-card">
      {(tag || date) && (
        <div className="kai-reading-meta">
          {tag ? <span className="kai-tag">{tag}</span> : null}
          {date ? <span className="kai-reading-date">{date}</span> : null}
        </div>
      )}
      <h2 className="kai-reading-title">{title}</h2>
      {lead ? <span className="kai-reading-lead">{lead}</span> : null}
      <div className="kai-reading-body">{children}</div>
      {(readHref || readTime) ? <div className={`kai-reading-footer${readHref ? '' : ' is-meta-only'}`}>
        {readHref ? <a className="kai-read-more" href={readHref}>{readLabel}</a> : null}
        {readTime ? <span className="kai-read-time">{readTime}</span> : null}
      </div> : null}
    </article>
  );
}
