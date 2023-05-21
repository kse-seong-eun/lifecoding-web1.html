var Links = {
  setColor: function (color) {
    var alist = document.querySelectorAll("a");
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
  },
};

var Body = {
  //객체에 속해있는 함수는 메서드라고 부른다!!!
  setColor: function (color) {
    document.querySelector("body").style.color = color;
  },
  setBackgroundColor: function (color) {
    document.querySelector("body").style.backgroundColor = color;
  },
};

function nightDayHandler(self) {
  var target = document.querySelector("body");
  if (self.value === "Night") {
    Body.setBackgroundColor("black");
    Body.setColor("white");
    self.value = "Day";

    Links.setColor("yellow");
  } else {
    Body.setBackgroundColor("white");
    Body.setColor("black");
    self.value = "Night";

    Links.setColor("blue");
  }
}
