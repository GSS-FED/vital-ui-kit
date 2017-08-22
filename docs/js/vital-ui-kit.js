/*******************************************
 * Copyright © 2017 Galaxy Software Services
 *
 * vital-ui-kit, v0.0.7
 * UI Kit for GSS Vital Family
 *
 * By Neil Lin (https://github.com/Neil-Lin),Patric,Laura Lee (https://github.com/l443018),Eric Yip (https://github.com/ericyip),Vibrissa (https://github.com/Vibrissa),YuRu Lee (https://github.com/YuRu-Lee),CJies Tan (https://github.com/cjies),Evan Wu (https://github.com/evanwu-tw)
 *
 * License: MIT
 *
 ******************************************/
/*! Sooge UI | Galaxy Software Services Corporation */
'use strict';

if (typeof jQuery === 'undefined') {
  throw new Error('Sooge UI\'s JavaScript requires jQuery')
}

/**
 * Global `sg` object
 * @namespace
 */
var sg = window.sg = {};
var PREFIX = 'sg';
var STATE_PREFIX = 'sg-state';
var _PREFIX = '.sg';
var _STATE_PREFIX = '.sg-state';


/**
 * Default options
 * @type {Object}
 */
sg.options = {};


/** 
 * @name initializeLayout
 * @desc 外層layout高度計算
 */ 
sg.initializeLayout = function() {
  // fn layout
  var $fnBodyInner = $(_PREFIX + '-fn-body__inner');
  if($fnBodyInner.length !== 0) {
    $fnBodyInner.css('display', 'none');
    $fnBodyInner.css('height', $(_PREFIX + '-fn-body').outerHeight());
    $fnBodyInner[0].style.display = '';
  }
    
  return this;
};


sg.initializeEvents = function() {
  $(window).on('resize', function() { sg.onWindowResize(); });
  
  return this;
}


/**
 * @name initializeInput
 * @desc inputs control
 */
sg.initializeInput = function() {

  // ----- live ----- //

  // global
  $(document).on('click', function(e) {

    // close dropdown
    if($(e.target).closest(_PREFIX + '-dropdown-toggle').length == 0) {
      $(_PREFIX + '-dropdown-menu').parent().removeClass('open');
      $(_PREFIX + '-dropdown-menu').attr('aria-expanded', 'false');
    }
    
  });

  $(document).on('click', _PREFIX + '-interbtn--mainbtn', function() {
    $('#hero-card').addClass(PREFIX + '-card--mask');
    $('#interbtn-area').addClass(STATE_PREFIX + '--selected');
  });

  $(document).on('click', _PREFIX + '-interbtn--subtn', function() {
    $('#hero-card').removeClass(PREFIX + '-card--mask');
    $('#interbtn-area').removeClass(STATE_PREFIX + '--selected');
  });

  // dropdown open
  $(document).on('click', '[data-toggle="dropdown"]', function() {
    var status = $(this).attr('aria-expanded') == 'true' ? false : true;
    $(this).parent().toggleClass('open');
    $(this).attr('aria-expanded', status);
  });

  $(document).on('click', '[data-toggle="dropdown"] + ' + _PREFIX + '-dropdown-menu', function(e) {
    e.stopPropagation();
  });

  // clear input text
  $(document).on('click', _PREFIX + '-input-item.' + STATE_PREFIX + '--icon-clear', function() {
    var me = $(this);
    me.children('input').val('');
    me.removeClass(STATE_PREFIX + '--has-input');
  });


  // ----- bind ----- //

  $(_PREFIX + '-input').on('keyup', function() {
    var me = $(this);
    var item = me.closest(_PREFIX + '-input-item');
    if (me.val() !== '') {
      item.addClass(STATE_PREFIX + '--has-input');
    } else {
      item.removeClass(STATE_PREFIX + '--has-input');
    }
  });


  return this;
};


/**
 * @name initializeComponents
 * @desc other components
 */
sg.initializeComponents = function() {

  // ----- table: check all checked or not ----- //

  $("#checkbox-table-all").change(function() {
    var checkboxes = $(this).closest(_PREFIX + '-table').find('input[name="checkbox-table"]:checkbox');
    if ($(this).is(':checked')) {
      checkboxes.prop('checked', 'checked');
    } else {
      checkboxes.removeAttr('checked');
    }
  });

  $('input[name="checkbox-table"]').change(function() {
    checkOrRemoveCheckAll();
    if ($('input[name="checkbox-table"]:checked')) {
      $(this).parents('tr').removeClass(PREFIX + '-selected');
    } else {
      $(this).parents('tr').addClass(PREFIX + '-selected');
    }
  });

  function checkOrRemoveCheckAll() {
    if ($('input[name="checkbox-table"]:checked').length == $('input[name="checkbox-table"]').length) {
      $('#checkbox-table-all').prop("checked", "checked");
    } else {
      $('#checkbox-table-all').removeAttr("checked");
    }
  }


  // ----- table: if checkbox checked, tr add classname ----- //

  var $table = $('table'),
    checkboxColumn = 0;

  // checkboxes updates
  $table.find('tbody').on('change', 'input', function() {
    var $cell = $(this).closest('td');
    // only accept checkboxes in the first column
    if ($cell[0].cellIndex === checkboxColumn) {
      $cell.closest('tr').toggleClass(PREFIX + '-selected', this.checked);
      // update cache with checkbox state
      $table.trigger('updateCell', [$cell[0]]);
    }
  });

  $table.find('thead input').on('change', function() {
    var chk = this.checked;
    $table.find('tbody tr').each(function() {
      $(this).find('td:eq(' + checkboxColumn + ') input')
        .prop('checked', chk)
        .trigger('change');
    });
  });


  // ----- modals ----- //

  $('#myModal').appendTo("body");
  $(_PREFIX + '-card-footer-btn--primary').on('click', function() {
    $('#myModal').modal('hide');
  });


  // ----- Collapse ----- //
  /*
    * Collapse plugin for jQuery
    * --
     * source: http://github.com/danielstocks/jQuery-Collapse/
    * site: http://webcloud.se/jQuery-Collapse
    *
    * @author Daniel Stocks (http://webcloud.se)
    * Copyright 2013, Daniel Stocks
    * Released under the MIT, BSD, and GPL Licenses.
   */
   /*
    * vital-ui-kit edit the controll name as "sgControl" to avoid conflict with other js framework
   */
  (function($, exports) {

    // Constructor
    function Collapse(el, options) {
      options = options || {};
      var _this = this,
        query = options.query || "> :even";

      $.extend(_this, {
        $el: el,
        options: options,
        sections: [],
        isAccordion: options.accordion || false,
        db: options.persist ? jQueryCollapseStorage(el.get(0).id) : false
      });

      // Figure out what sections are open if storage is used
      _this.states = _this.db ? _this.db.read() : [];

      // For every pair of elements in given
      // element, create a section
      _this.$el.find(query).each(function() {
        new jQueryCollapseSection($(this), _this);
      });

      // Capute ALL the clicks!
      (function(scope) {
        _this.$el.on("click", "[data-collapse-summary] " + (scope.options.clickQuery || ""),
          $.proxy(_this.handleClick, scope));

        _this.$el.bind("toggle close open",
          $.proxy(_this.handleEvent, scope));

      }(_this));
    }

    Collapse.prototype = {
      handleClick: function(e, state) {
        e.preventDefault();
        state = state || "toggle";
        var sections = this.sections,
          l = sections.length;
        while (l--) {
          if ($.contains(sections[l].$summary[0], e.target)) {
            sections[l][state]();
            break;
          }
        }
      },
      handleEvent: function(e) {
        if (e.target == this.$el.get(0)) return this[e.type]();
        this.handleClick(e, e.type);
      },
      open: function(eq) {
        this._change("open", eq);
      },
      close: function(eq) {
        this._change("close", eq);
      },
      toggle: function(eq) {
        this._change("toggle", eq);
      },
      _change: function(action, eq) {
        if (isFinite(eq)) return this.sections[eq][action]();
        $.each(this.sections, function(i, section) {
          section[action]();
        });
      }
    };

    // Section constructor
    function Section($el, parent) {

      if (!parent.options.clickQuery) $el.wrapInner('<a href="#"/>');

      $.extend(this, {
        isOpen: false,
        $summary: $el.attr("data-collapse-summary", ""),
        $details: $el.next(),
        options: parent.options,
        parent: parent
      });
      parent.sections.push(this);

      // Check current state of section
      var state = parent.states[this._index()];

      if (state === 0) {
        this.close(true);
      } else if (this.$summary.is(".open") || state === 1) {
        this.open(true);
      } else {
        this.close(true);
      }
    }

    Section.prototype = {
      toggle: function() {
        this.isOpen ? this.close() : this.open();
      },
      close: function(bypass) {
        this._changeState("close", bypass);
      },
      open: function(bypass) {
        var _this = this;
        if (_this.options.accordion && !bypass) {
          $.each(_this.parent.sections, function(i, section) {
            section.close();
          });
        }
        _this._changeState("open", bypass);
      },
      _index: function() {
        return $.inArray(this, this.parent.sections);
      },
      _changeState: function(state, bypass) {

        var _this = this;
        _this.isOpen = state == "open";
        if ($.isFunction(_this.options[state]) && !bypass) {
          _this.options[state].apply(_this.$details);
        } else {
          _this.$details[_this.isOpen ? "show" : "hide"]();
        }

        _this.$summary.toggleClass("open", state !== "close");
        _this.$details.attr("aria-hidden", state === "close");
        _this.$summary.attr("aria-expanded", state === "open");
        _this.$summary.trigger(state === "open" ? "opened" : "closed", _this);
        if (_this.parent.db) {
          _this.parent.db.write(_this._index(), _this.isOpen);
        }
      }
    };

    // Expose in jQuery API
    $.fn.extend({
      sgCollapse: function(options, scan) {
        var nodes = (scan) ? $("body").find("[data-" + PREFIX + "-collapse]") : $(this);
        return nodes.each(function() {
          var settings = (scan) ? {} : options,
            values = $(this).attr("data-" + PREFIX + "-collapse") || "";
          $.each(values.split(" "), function(i, v) {
            if (v) settings[v] = true;
          });
          new Collapse($(this), settings);
        });
      }
    });

    // Expose constructor to
    // global namespace
    exports.jQueryCollapse = Collapse;
    exports.jQueryCollapseSection = Section;

    //jQuery DOM Ready
    $(function() {
      $.fn.sgCollapse(false, true);
    });

  })(window.jQuery, window);

  return this;
};


sg.onWindowResize = function() {
  // resize fn layout
  setTimeout(function() {
    var $fnBodyInner = $(_PREFIX + '-fn-body__inner');
    if($fnBodyInner.length !== 0) {
      $fnBodyInner.css('display', 'none');
      $fnBodyInner.css('height', $(_PREFIX + '-fn-body').outerHeight());
      $fnBodyInner[0].style.display = '';
    }
  }, 200);

  return this;
};


/**
 * Initialization
 */
(function() {

  sg
    .initializeComponents()
    .initializeEvents()
    .initializeInput()
    .initializeLayout()
    ;

}());
