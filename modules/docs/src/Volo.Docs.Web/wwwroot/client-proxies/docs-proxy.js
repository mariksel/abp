/* This file is automatically generated by ABP framework to use MVC Controllers from javascript. */


// module docs

(function(){

  // controller volo.docs.admin.documentsAdmin

  (function(){

    abp.utils.createNamespace(window, 'volo.docs.admin.documentsAdmin');

    volo.docs.admin.documentsAdmin.clearCache = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/docs/admin/documents/ClearCache',
        type: 'POST',
        dataType: null,
        data: JSON.stringify(input)
      }, ajaxParams));
    };

    volo.docs.admin.documentsAdmin.pullAll = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/docs/admin/documents/PullAll',
        type: 'POST',
        dataType: null,
        data: JSON.stringify(input)
      }, ajaxParams));
    };

    volo.docs.admin.documentsAdmin.pull = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/docs/admin/documents/Pull',
        type: 'POST',
        dataType: null,
        data: JSON.stringify(input)
      }, ajaxParams));
    };

    volo.docs.admin.documentsAdmin.getAll = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/docs/admin/documents/GetAll' + abp.utils.buildQueryString([{ name: 'projectId', value: input.projectId }, { name: 'name', value: input.name }, { name: 'version', value: input.version }, { name: 'languageCode', value: input.languageCode }, { name: 'fileName', value: input.fileName }, { name: 'format', value: input.format }, { name: 'creationTimeMin', value: input.creationTimeMin }, { name: 'creationTimeMax', value: input.creationTimeMax }, { name: 'lastUpdatedTimeMin', value: input.lastUpdatedTimeMin }, { name: 'lastUpdatedTimeMax', value: input.lastUpdatedTimeMax }, { name: 'lastSignificantUpdateTimeMin', value: input.lastSignificantUpdateTimeMin }, { name: 'lastSignificantUpdateTimeMax', value: input.lastSignificantUpdateTimeMax }, { name: 'lastCachedTimeMin', value: input.lastCachedTimeMin }, { name: 'lastCachedTimeMax', value: input.lastCachedTimeMax }, { name: 'sorting', value: input.sorting }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }]) + '',
        type: 'GET'
      }, ajaxParams));
    };

    volo.docs.admin.documentsAdmin.removeFromCache = function(documentId, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/docs/admin/documents/RemoveDocumentFromCache' + abp.utils.buildQueryString([{ name: 'documentId', value: documentId }]) + '',
        type: 'PUT',
        dataType: null
      }, ajaxParams));
    };

    volo.docs.admin.documentsAdmin.reindex = function(documentId, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/docs/admin/documents/ReindexDocument' + abp.utils.buildQueryString([{ name: 'documentId', value: documentId }]) + '',
        type: 'PUT',
        dataType: null
      }, ajaxParams));
    };

  })();

  // controller volo.docs.admin.projectsAdmin

  (function(){

    abp.utils.createNamespace(window, 'volo.docs.admin.projectsAdmin');

    volo.docs.admin.projectsAdmin.getList = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/docs/admin/projects' + abp.utils.buildQueryString([{ name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }, { name: 'sorting', value: input.sorting }]) + '',
        type: 'GET'
      }, ajaxParams));
    };

    volo.docs.admin.projectsAdmin.get = function(id, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/docs/admin/projects/' + id + '',
        type: 'GET'
      }, ajaxParams));
    };

    volo.docs.admin.projectsAdmin.create = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/docs/admin/projects',
        type: 'POST',
        data: JSON.stringify(input)
      }, ajaxParams));
    };

    volo.docs.admin.projectsAdmin.update = function(id, input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/docs/admin/projects/' + id + '',
        type: 'PUT',
        data: JSON.stringify(input)
      }, ajaxParams));
    };

    volo.docs.admin.projectsAdmin['delete'] = function(id, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/docs/admin/projects' + abp.utils.buildQueryString([{ name: 'id', value: id }]) + '',
        type: 'DELETE',
        dataType: null
      }, ajaxParams));
    };

    volo.docs.admin.projectsAdmin.reindexAll = function(ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/docs/admin/projects/ReindexAll',
        type: 'POST',
        dataType: null
      }, ajaxParams));
    };

    volo.docs.admin.projectsAdmin.reindex = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/docs/admin/projects/Reindex',
        type: 'POST',
        dataType: null,
        data: JSON.stringify(input)
      }, ajaxParams));
    };

  })();

  // controller volo.docs.areas.documents.documentResource

  (function(){

    abp.utils.createNamespace(window, 'volo.docs.areas.documents.documentResource');

    volo.docs.areas.documents.documentResource.getResource = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'document-resources' + abp.utils.buildQueryString([{ name: 'projectId', value: input.projectId }, { name: 'name', value: input.name }, { name: 'version', value: input.version }, { name: 'languageCode', value: input.languageCode }]) + '',
        type: 'GET'
      }, ajaxParams));
    };

  })();

  // controller volo.docs.projects.docsProject

  (function(){

    abp.utils.createNamespace(window, 'volo.docs.projects.docsProject');

    volo.docs.projects.docsProject.getList = function(ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/docs/projects',
        type: 'GET'
      }, ajaxParams));
    };

    volo.docs.projects.docsProject.get = function(shortName, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/docs/projects/' + shortName + '',
        type: 'GET'
      }, ajaxParams));
    };

    volo.docs.projects.docsProject.getDefaultLanguageCode = function(shortName, version, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/docs/projects/' + shortName + '/defaultLanguage' + abp.utils.buildQueryString([{ name: 'version', value: version }]) + '',
        type: 'GET'
      }, { dataType: 'text' }, ajaxParams));
    };

    volo.docs.projects.docsProject.getVersions = function(shortName, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/docs/projects/' + shortName + '/versions',
        type: 'GET'
      }, ajaxParams));
    };

    volo.docs.projects.docsProject.getLanguageList = function(shortName, version, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/docs/projects/' + shortName + '/' + version + '/languageList',
        type: 'GET'
      }, ajaxParams));
    };

  })();

  // controller volo.docs.documents.docsDocument

  (function(){

    abp.utils.createNamespace(window, 'volo.docs.documents.docsDocument');

    volo.docs.documents.docsDocument.get = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/docs/documents' + abp.utils.buildQueryString([{ name: 'projectId', value: input.projectId }, { name: 'name', value: input.name }, { name: 'version', value: input.version }, { name: 'languageCode', value: input.languageCode }]) + '',
        type: 'GET'
      }, ajaxParams));
    };

    volo.docs.documents.docsDocument.getDefault = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/docs/documents/default' + abp.utils.buildQueryString([{ name: 'projectId', value: input.projectId }, { name: 'version', value: input.version }, { name: 'languageCode', value: input.languageCode }]) + '',
        type: 'GET'
      }, ajaxParams));
    };

    volo.docs.documents.docsDocument.getNavigation = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/docs/documents/navigation' + abp.utils.buildQueryString([{ name: 'projectId', value: input.projectId }, { name: 'version', value: input.version }, { name: 'languageCode', value: input.languageCode }]) + '',
        type: 'GET'
      }, ajaxParams));
    };

    volo.docs.documents.docsDocument.getResource = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/docs/documents/resource' + abp.utils.buildQueryString([{ name: 'projectId', value: input.projectId }, { name: 'name', value: input.name }, { name: 'version', value: input.version }, { name: 'languageCode', value: input.languageCode }]) + '',
        type: 'GET'
      }, ajaxParams));
    };

    volo.docs.documents.docsDocument.search = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/docs/documents/search',
        type: 'POST',
        data: JSON.stringify(input)
      }, ajaxParams));
    };

    volo.docs.documents.docsDocument.fullSearchEnabled = function(ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/docs/documents/full-search-enabled',
        type: 'GET'
      }, ajaxParams));
    };

    volo.docs.documents.docsDocument.getUrls = function(prefix, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/docs/documents/links' + abp.utils.buildQueryString([{ name: 'prefix', value: prefix }]) + '',
        type: 'GET'
      }, ajaxParams));
    };

    volo.docs.documents.docsDocument.getParameters = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/docs/documents/parameters' + abp.utils.buildQueryString([{ name: 'projectId', value: input.projectId }, { name: 'version', value: input.version }, { name: 'languageCode', value: input.languageCode }]) + '',
        type: 'GET'
      }, ajaxParams));
    };

  })();

})();


