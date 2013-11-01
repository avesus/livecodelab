/*
## Keeps the time. A small thing to do, but it allows tricks such as
## setting a fake time for testing purposes, and avoiding repeated and
## unnecessary invokation of the Date and getTime browser functions.
*/

define(function() {
  var TimeKeeper;
  TimeKeeper = (function() {
    TimeKeeper.prototype.time = void 0;

    TimeKeeper.prototype.timeAtStart = void 0;

    TimeKeeper.prototype.milliseconds = void 0;

    function TimeKeeper() {
      window.time = 0;
    }

    TimeKeeper.prototype.updateTime = function() {
      var d;
      d = new Date();
      this.time = d.getTime() - this.timeAtStart;
      window.time = d.getTime() - this.timeAtStart;
      return this.milliseconds = d.getMilliseconds();
    };

    TimeKeeper.prototype.resetTime = function() {
      var d;
      d = new Date();
      this.time = 0;
      window.time = 0;
      return this.timeAtStart = d.getTime();
    };

    TimeKeeper.prototype.getTime = function() {
      return this.time;
    };

    return TimeKeeper;

  })();
  return TimeKeeper;
});

/*
//@ sourceMappingURL=time-keeper.js.map
*/