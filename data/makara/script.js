const csvFiles = [
  "13th_Gen_Intel(R)_Core(TM)_i7-1355U.csv",
  "AMD_A12-9720P_RADEON_R7,_12_COMPUTE_CORES_4C+8G.csv",
  "AMD_Ryzen_7_9800X3D_8-Core_Processor.csv",
  "AMD_Ryzen_3_3200G_with_Radeon_Vega_Graphics.csv",
  "AMD_Ryzen_5_3500U_with_Radeon_Vega_Mobile_Gfx.csv",
  "AMD_Ryzen_5_5600G_with_Radeon_Graphics.csv",
  "AMD_Ryzen_Threadripper_7970X_32-Cores.csv",
  "Intel(R)_Core(TM)_i5-9300H_CPU__2.40GHz.csv",
  "Intel(R)_Core(TM)_i5-9400F_CPU__2.90GHz.csv",
  "Intel(R)_Core(TM)_i7-6700T_CPU__2.80GHz.csv",
  "Intel(R)_Xeon(R)_CPU_E5-2620_0__2.00GHz.csv",
];

const list = document.getElementById("csv-list");

csvFiles.forEach((file) => {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.href = file;
  a.textContent = file;
  a.target = "_blank"; // abre em nova aba
  a.rel = "noopener";

  li.appendChild(a);
  list.appendChild(li);
});
