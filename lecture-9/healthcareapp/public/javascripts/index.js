function deleteDoctor(id) {
  fetch(`http://localhost:3000/doctors/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.error) {
        location.reload();
      }
    })
    .catch((err) => {
      console.log("Se sluci greska pri brisenje doktor: ", err);
    });
}

function deletePatient(id) {
  fetch(`http://localhost:3000/patients/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.error) {
        location.reload();
      }
    })
    .catch((err) => {
      console.log("Se sluci greska pri brisenje pacient: ", err);
    });
}
$(document).ready(function () {
  $(".select-doctor").select2({
    placeholder: "Choose a doctor",
    allowClear: true,
  });
});
