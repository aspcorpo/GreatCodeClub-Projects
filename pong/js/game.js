// Generated by CoffeeScript 1.7.1
(function() {
  window.Game = (function() {
    function Game(canvas) {
      this.context = canvas.getContext("2d");
      this.width = canvas.width;
      this.height = canvas.height;
      this.keyPressed = {};
      this.keys = {
        32: "space",
        37: "left",
        38: "up",
        39: "right",
        40: "down"
      };
      this.entities = [];
      $(canvas).on("keydown keyup", (function(_this) {
        return function(e) {
          var keyName;
          keyName = _this.keys[e.which];
          if (keyName) {
            _this.keyPressed[keyName] = e.type === 'keydown';
            return e.preventDefault();
          }
        };
      })(this));
    }

    Game.prototype.draw = function() {
      return this.entities.forEach((function(_this) {
        return function(entity) {
          if (entity.draw) {
            return entity.draw(_this.context);
          }
        };
      })(this));
    };

    Game.prototype.update = function() {
      return this.entities.forEach((function(_this) {
        return function(entity) {
          if (entity.update) {
            return entity.update();
          }
        };
      })(this));
    };

    Game.prototype.start = function() {
      var fps, interval;
      fps = 60;
      interval = 1000 / fps;
      return setInterval((function(_this) {
        return function() {
          _this.update();
          return _this.draw();
        };
      })(this), interval);
    };

    return Game;

  })();

}).call(this);
