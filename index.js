var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var toDos = {};
for (var i = 9; i <= 17; i++) {
  $(".container").append(`<div class="row time-block">
<div class="hour col-1">
  ${i}:00
</div>
<textarea rows="2" class="${
    hours > i ? "past" : hours < i ? "future" : "present"
  } description col-10"></textarea> 
<button class="saveBtn col-1" id=${i}>
  <i class="fas fa-save"></i>
</button>
</div>`);
}
$(".saveBtn").click(function () {
  var key = $(this).attr("id");
  var value = $(this).siblings("textarea").val();
  toDos[key] = value;
  console.log(toDos);
});
