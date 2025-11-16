// === 🌺 NAVBAR TOGGLE (HAMBURGER) ===
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

if (hamburger) {
  hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    navbarNav.classList.toggle("active");
  });

  // Klik di luar menu untuk menutup
  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });
}

// === 🌸 SEARCH TOGGLE ===
const searchForm = document.querySelector(".search-form");
const searchButton = document.querySelector("#search-button");

if (searchButton && searchForm) {
  searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    searchForm.classList.toggle("active");
  });
}

// === 🛒 CART PANEL TOGGLE ===
const cartPanel = document.querySelector("#cart-panel");
const cartButton = document.querySelector("#shopping-cart");
const closeCart = document.querySelector("#close-cart");
const cartItems = document.querySelector(".cart-items");

if (cartButton && cartPanel) {
  cartButton.addEventListener("click", (e) => {
    e.preventDefault();
    cartPanel.classList.toggle("active");
  });
}
if (closeCart) {
  closeCart.addEventListener("click", () => {
    cartPanel.classList.remove("active");
  });
}

// === 🌼 MODAL PRODUK ===
const productCards = document.querySelectorAll(".product-card");
const modal = document.getElementById("product-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalPrice = document.getElementById("modal-price");
const addCartBtn = document.querySelector(".add-cart-btn");
const closeBtn = document.querySelector(".close-btn");

if (productCards && modal) {
  productCards.forEach((card) => {
    card.addEventListener("click", () => {
      const img = card.querySelector("img").src;
      const title = card.querySelector("h3").innerText;
      const price = card.querySelector(".product-price").innerText;

      modalImg.src = img;
      modalTitle.textContent = title;
      modalPrice.textContent = price;
      modal.classList.add("active");
    });
  });
}

// Tutup modal
if (closeBtn && modal) {
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });
}

// === 🛍️ TAMBAHKAN ITEM KE KERANJANG ===
if (addCartBtn && cartItems) {
  addCartBtn.addEventListener("click", () => {
    const item = {
      title: modalTitle.textContent,
      price: modalPrice.textContent,
      img: modalImg.src,
    };

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <div class="cart-info">
        <h4>${item.title}</h4>
        <p>${item.price}</p>
      </div>
      <i class='bx bx-trash delete-item' title='Hapus'></i>
    `;

    // Hapus teks kosong
    const emptyText = document.querySelector(".empty");
    if (emptyText) emptyText.remove();

    cartItems.appendChild(cartItem);
    modal.classList.remove("active");

    alert(`${item.title} berhasil ditambahkan ke keranjang 💐`);

    const deleteBtn = cartItem.querySelector(".delete-item");
    deleteBtn.addEventListener("click", () => {
      cartItem.remove();
      if (cartItems.children.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.classList.add("empty");
        emptyMessage.textContent = "Keranjang masih kosong 🌸";
        cartItems.appendChild(emptyMessage);
      }
    });
  });
}

// === 💌 FORM KONTAK ===
const contactForm = document.getElementById("contactForm");
const notifPopup = document.getElementById("notifPopup");

if (contactForm && notifPopup) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validasi sederhana
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !message) {
      alert("⚠️ Harap isi semua kolom sebelum mengirim pesan!");
      return;
    }

    notifPopup.style.display = "flex";
    setTimeout(() => {
      notifPopup.style.display = "none";
    }, 2500);
    contactForm.reset();
  });
}
