import { Bundle } from './models';

export default {
  // POST /
  createBundle: {
    body: {
      filename: Bundle.filename.required(),
    },
  },

  // POST /bundle
  instantDownloadBundle: {
    body: {
      files: Bundle.files.required(),
    },
  },

  // GET /:id
  downloadBundle: {
    body: {
    },
    params: {
      id: Bundle.id.required(),
    }
  },

  // GET /:id/:secret
  // DELETE /:id/:secret
  protectedReadBundle: {
    body: {
    },
    params: {
      id: Bundle.id.required(),
      secret: Bundle.secret.required(),
    }
  },

  // PUT /:id/:secret
  updateBundle: {
    body: {
      files: Bundle.files.required(),
    },
    params: {
      id: Bundle.id.required(),
      secret: Bundle.secret.required(),
    }
  },
};
