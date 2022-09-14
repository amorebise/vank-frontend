<template>
  <div class="upload_wrapper">
    <div class="drag_area text-center py-4" id="drag_area">
      <div class="">
        <div class="">
          <ion-icon
            style="font-size: 24px"
            name="cloud-upload-outline"
          ></ion-icon>
        </div>
        <header class="text-dark" id="textDrag">Drag and Upload File</header>
        <span role="button" class="text-dark" id="button">Upload File</span>
        <input id="input" type="file" class="file" hidden />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    upload_image() {
      const drop_area = document.getElementById("drag_area");
      const dragText = document.getElementById("textDrag");
      const input = document.getElementById("input");
      const button = document.getElementById("button");

      let file;

      button.onclick = () => {
        input.click();
      };

      input.addEventListener("change", function () {
        file = this.files[0];
        showFile();
        drop_area.classList.add("active");
      });

      // If user drags file over drag area
      drop_area.addEventListener("dragover", (event) => {
        event.preventDefault();
        // console.log("File is over Drag Area");
        drop_area.classList.add("active");
        dragText.textContent = "Release to Upload File";
      });
      // If user drags file from drag area
      drop_area.addEventListener("dragleave", () => {
        // console.log("File is outside Drag Area");
        drop_area.classList.remove("active");
        dragText.textContent = "Drag and Drop to Upload File";
      });

      // If user drops file on drop area
      drop_area.addEventListener("drop", (event) => {
        event.preventDefault();
        // console.log("File is dropped on Drop Area");
        file = event.dataTransfer.files[0];
        console.log(file);
        showFile();
      });
      function showFile() {
        let fileType = file.type;

        let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
        if (validExtensions.includes(fileType)) {
          let fileReader = new FileReader();
          fileReader.onload = () => {
            let fileURL = fileReader.result;
            console.log(fileURL);
            let imgTag = `<img src="${fileURL}" alt="">`;
            drop_area.innerHTML = imgTag;
          };
          fileReader.readAsDataURL(file);
        } else {
          alert("This is not an Image File");
          drop_area.classList.remove("active");
        }
      }
    },
  },
  mounted() {
    this.upload_image();
  },
};
</script>

<style>
.upload_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.142);
  width: 700px;
  height: 100px;
  margin-left: 10px;
  /* background-color: #5256ad; */
}
.file {
  width: 100%;
  font-size: 10px;
}

.drag_area {
  border: 2px dashed #fff;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.drag_area.active {
  border: 2px solid #fff;
}
.drag_area .icon {
  font-size: 30px;
  color: #fff;
}
.drag_area header {
  font-size: 12px;
  font-weight: 500;
  color: #fff;
}
.drag_area span {
  font-size: 11px;
  font-weight: 500;
  color: #fff;
  margin: 10px 0 15px 0 !important;
}
.drag_area button {
  /* padding: 2px 15px !important; */
  font-size: 10px;
  font-weight: 500;
  border: none;
  outline: none;
  background-color: #fff;
  color: #5256ad;
  border-radius: 5px;
  cursor: pointer;
}
.icon {
  font-size: 15px;
}
.drag_area img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
}
</style>