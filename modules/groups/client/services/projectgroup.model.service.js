'use strict';

angular.module('groups').factory ('ProjectGroupModel', function (ModelBase) {
  var Class = ModelBase.extend ({
    urlName : 'projectgroup',
    forProject: function (id) {
      return this.get ('/api/projectgroup/for/project/'+id);
    }
  });
  return new Class ();
});
