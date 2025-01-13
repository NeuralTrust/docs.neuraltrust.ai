import React from 'react';
import { API } from '@stoplight/elements';
import '@stoplight/elements/styles.min.css';

export default function ApiDocs({ spec }) {
  return (
    <div className="api-docs">
      <API apiDescriptionDocument={spec} router="memory" />
    </div>
  );
} 