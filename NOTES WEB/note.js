$(document).ready(function () {
  let currentbox = 1;

  $("#btn").click(function () {
    let notetext = $("#note").val().trim();

    if (notetext === "") {
      alert("Please enter a note.");
    }

    let box = $(`.box${currentbox}`);
    box.html(`
            <div class="note-content">${notetext}</div>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `);
    currentbox++;
  });

  $(".box").on("click", ".edit-btn", function () {
    let box = $(this).parent();
    let notecontent = box.find(".note-content").text();
    let newnote = prompt("Edit your note:", notecontent);
    if (newnote !== null && newnote.trim() !== "") {
      box.find(".note-content").text(newnote.trim());
    }
  });

  $(".box").on("click", ".delete-btn", function () {
    let box = $(this).parent();
    box.html("");
    box.removeClass("filled");

    let boxclass = box.attr("class").match(/box(\d+)/);
    if (boxclass) {
      let boxnumber = parseInt(boxclass[1]);
      if (boxnumber < currentbox) {
        currentbox = boxnumber;
      }
    }
  });
});
