var Step = function(keyword, name, line) {
  var docString;

  var self = {
    getKeyword: function getKeyword() {
      return keyword;
    },

    getName: function getName() {
      return name;
    },

    getLine: function getLine() {
      return line;
    },

    hasDocString: function hasDocString() {
      return !!docString;
    },

    getDocString: function getDocString() { return docString; },

    attachDocString: function attachDocString(_docString) { docString = _docString; },

    acceptVisitor: function acceptVisitor(visitor, callback) {
      self.execute(visitor, function(stepResult) {
        visitor.visitStepResult(stepResult, callback);
      });
    },

    execute: function execute(visitor, callback) {
      var stepDefinition = visitor.lookupStepDefinitionByName(name);
      var world          = visitor.getWorld();
      stepDefinition.invoke(name, world, docString, callback);
    }
  };
  return self;
};
module.exports = Step;
