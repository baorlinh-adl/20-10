window.addEventListener("load", () => {
  const flowerField = document.querySelector(".flowers");

  // Tạo thêm nhiều bông hoa từ mẫu hoa gốc để giữ nguyên hiệu ứng nở.
  if (flowerField && !flowerField.dataset.extraFlowersAdded) {
    flowerField.dataset.extraFlowersAdded = "true";
    const originals = [...flowerField.querySelectorAll(":scope > .flower")];
    const positions = [
      [4, 5, .34, 28, -12], [12, 13, .42, 34, 8], [20, 4, .30, 24, -8],
      [28, 17, .36, 31, 10], [36, 6, .31, 26, -10], [44, 13, .38, 33, 7],
      [54, 5, .32, 25, -7], [62, 16, .40, 35, 11], [70, 5, .31, 26, -9],
      [78, 13, .37, 32, 8], [87, 4, .33, 27, -11], [95, 12, .39, 34, 9],
      [8, 28, .25, 22, 7], [25, 31, .27, 23, -8], [43, 27, .24, 21, 9],
      [60, 31, .26, 23, -7], [76, 27, .25, 22, 8], [91, 30, .27, 24, -9]
    ];

    positions.forEach(([left, bottom, scale, stem, tilt], index) => {
      const source = originals[index % originals.length];
      if (!source) return;
      const flower = source.cloneNode(true);
      flower.className = "flower extra-flower";
      flower.setAttribute("aria-hidden", "true");
      flower.style.left = `${left}%`;
      flower.style.bottom = `${bottom}vh`;
      flower.style.setProperty("--extra-scale", scale);
      flower.style.setProperty("--extra-stem", `${stem}vmin`);
      flower.style.setProperty("--extra-tilt", `${tilt}deg`);
      flower.style.setProperty("--extra-delay", `${(index % 8) * -0.37}s`);
      flower.style.zIndex = String(2 + Math.round(scale * 10));
      flower.classList.add(`extra-hue-${index % 6}`);
      flowerField.appendChild(flower);
    });
  }

  window.setTimeout(() => document.body.classList.remove("not-loaded"), 900);
});
