<script>
    const rota = {
      1: "Anna",
      2: "Tom",
      3: "Anna",
      4: "Joe",
      5: "Tom",
      6: "Tom",
      7: "Joe",
      8: "Anna",
      9: "Anna",
      10: "Tom",
      11: "Joe",
      12: "Anna",
      13: "Tom",
      14: "Joe",
      15: "Anna",
      // ... add more if needed
    };

    const calendarStartDay = 2; // July 1st, 2025 is a Tuesday, so Monday = 1, Tuesday = 2
    const totalDays = 31;

    const calendarEl = document.getElementById("calendar");

    // Empty slots before the 1st of the month
    for (let i = 1; i < calendarStartDay; i++) {
      calendarEl.innerHTML += `<div class="h-20 border bg-gray-50"></div>`;
    }

    // Fill the calendar days
    for (let day = 1; day <= totalDays; day++) {
      const caregiver = rota[day] || "—";
      calendarEl.innerHTML += `
        <div class="h-20 border p-1 bg-blue-50 rounded-lg flex flex-col justify-between text-sm">
          <div class="font-bold">${day}</div>
          <div class="text-gray-700">${caregiver}</div>
        </div>
      `;
    }
  </script>
</body>
</html>
