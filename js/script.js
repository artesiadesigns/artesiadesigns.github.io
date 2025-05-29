// Product Database
const productsDB = {
  jharoka: {
    id: 'jharoka',
    name: 'Jharoka',
    image: 'images/Jharoka.png',
    description: 'Experience the awe-inspiring beauty of this majestic masterpiece, meticulously adorned with captivating Lippan art and mirror work.',
    extendedDescription: 'This stunning Jharoka piece represents the pinnacle of traditional craftsmanship merged with contemporary aesthetics. Each intricate detail is carefully handcrafted using authentic Lippan art techniques, while the strategic placement of mirrors creates a mesmerizing play of light that brings the piece to life. The frame itself is a testament to artistic excellence, providing the perfect backdrop for this cultural masterpiece.',
    size: '50" high x 70" wide (with frame)',
    price: 9999,
    inStock: true
  },
  bansuri: {
    id: 'bansuri',
    name: 'Bansuri',
    image: 'images/featured_art_3.png',
    description: 'A mesmerizing representation of the divine flute, crafted with intricate Lippan art details.',
    extendedDescription: 'This beautiful piece captures the essence of music and spirituality through the traditional art form of Lippan. The intricate detailing and careful placement of mirrors create a stunning visual representation of the sacred flute, making it a perfect centerpiece for any space seeking to blend cultural significance with artistic excellence.',
    size: '36" x 24"',
    price: 2499,
    inStock: true
  },
  home: {
    id: 'home',
    name: 'Home',
    image: 'images/featured_art_4.png',
    description: 'A heartwarming representation of home through traditional Lippan artistry.',
    extendedDescription: 'This touching piece celebrates the warmth and comfort of home through the beautiful medium of Lippan art. The intricate patterns and thoughtful mirror placement create a welcoming atmosphere that resonates with the true meaning of home, making it a perfect addition to any living space.',
    size: '30" x 30"',
    price: 2999,
    inStock: true
  },
  rangeela: {
    id: 'rangeela',
    name: 'Rangeela',
    image: 'images/Rangeela.png',
    description: 'A vibrant masterpiece adorned with intricate Lippan art and dazzling mirror work, capturing the essence of tradition and modernity in a single glance.',
    extendedDescription: 'Rangeela is a celebration of color and creativity, where traditional Lippan art meets contemporary design sensibilities. This circular masterpiece features an intricate pattern that draws the eye inward, with carefully placed mirrors that create a dynamic interplay of light and shadow. Perfect as a statement piece, it brings both cultural richness and artistic sophistication to any space.',
    size: '36" diameter',
    price: 1999,
    inStock: true
  },
  mandala: {
    id: 'mandala',
    name: 'Mandala',
    image: 'images/Mandala.png',
    description: 'A striking art wall piece, blending the timeless elegance of Lippan art and the shimmering allure of mirror work against a captivating black backdrop.',
    extendedDescription: 'This mesmerizing Mandala piece combines the sacred geometry of traditional patterns with contemporary artistic expression. The contrast of the black backdrop with the intricate white Lippan work creates a dramatic visual impact, while strategically placed mirrors add depth and luminosity to the design.',
    size: '30" x 24"',
    price: 899,
    inStock: true
  },
  dreamscape: {
    id: 'dreamscape',
    name: 'Dreamscape',
    image: 'images/Dreamscape.png',
    description: 'An enchanting fusion of contemporary flair and ethereal beauty, showcasing Lippan art and mirror work adorned with delicate butterflies and flowers on a dreamy canvas.',
    extendedDescription: 'Dreamscape is where imagination meets artistry. This ethereal piece features delicate butterflies and flowers rendered in traditional Lippan art, creating a dreamy atmosphere that transforms any space into a magical sanctuary. The mirror work catches and reflects light, adding a dynamic element that changes throughout the day.',
    size: '29" x 30"',
    price: 2499,
    inStock: true
  },
  haveli: {
    id: 'haveli',
    name: 'Haveli',
    image: 'images/Haveli.png',
    description: 'Embracing heritage with grace, a traditional Lippan art and mirror work wall piece on a pristine white canvas, featuring an inviting Aangan framed by intricate Jharokha design.',
    extendedDescription: 'Haveli is a tribute to traditional Indian architecture and artistry. This piece captures the essence of a traditional courtyard home, with its intricate Jharokha design and detailed Lippan work creating a sense of depth and perspective. The pristine white backdrop enhances the sculptural quality of the artwork.',
    size: '29" x 30"',
    price: 2999,
    inStock: true
  },
  rangrasiya: {
    id: 'rangrasiya',
    name: 'Rang Rasiya',
    image: 'images/Rangrasiya.png',
    description: 'Twirl through life in your exquisite and colorful outfit and paint the world with your vibrant spirit.',
    extendedDescription: 'Rang Rasiya celebrates the joy of movement and color. This dynamic piece captures the essence of dance and celebration through intricate Lippan work and carefully placed mirrors that create a sense of movement and energy. The vibrant design makes it a perfect centerpiece for any contemporary space.',
    size: '40" x 28"',
    price: 2999,
    inStock: true
  },
  symphony: {
    id: 'symphony',
    name: 'Symphony',
    image: 'images/Symphony.png',
    description: 'These four exquisite Lippan wall art pieces are a stunning showcase of traditional craftsmanship, each uniquely adorned with intricate designs and shimmering art mirrors.',
    extendedDescription: 'Symphony is a collection of four harmonious pieces that work together to create a stunning visual narrative. Each piece features unique Lippan art patterns and mirror work, designed to complement each other while maintaining individual character. Perfect for creating an artistic gallery wall or distributed throughout your space.',
    size: '13.5" x 3.5"',
    price: 5999,
    inStock: true
  },
  roshan: {
    id: 'roshan',
    name: 'Roshan',
    image: 'images/Roshan.png',
    description: 'A flower pot boasts a mesmerizing display of Lippan artistry, transforming it into a captivating centerpiece of vibrant beauty.',
    extendedDescription: 'Roshan combines functionality with artistic excellence. This decorative flower pot features intricate Lippan work that transforms a simple vessel into a work of art. The design incorporates traditional patterns with contemporary sensibilities, making it perfect for both modern and traditional settings.',
    size: '48" x 18"',
    price: 149,
    inStock: true
  },
  potterspride: {
    id: 'potterspride',
    name: "Potter's Pride",
    image: "images/Potter's Pride.png",
    description: 'Illuminate your space with elegance and charm using these stunning candle/planter holders adorned with Lippan art and mirror work.',
    extendedDescription: 'This pair of exquisite candle/planter holders showcases the versatility of Lippan art in contemporary design. Each piece is carefully crafted with intricate patterns and mirror work, creating beautiful light play when used with candles. Perfect as standalone decorative pieces or functional holders.',
    size: '13.5" x 3.5"',
    price: 499,
    inStock: true
  },
  kalash: {
    id: 'kalash',
    name: 'Kalash',
    image: 'images/featured_art_2.png',
    description: 'Stands as a symbol of divine elegance and timeless tradition!',
    extendedDescription: 'The Kalash piece embodies the sacred symbolism of Indian culture with contemporary artistic expression. The traditional form is enhanced with intricate Lippan work and carefully placed mirrors, creating a piece that is both spiritually significant and aesthetically striking.',
    size: '19.5" x 19.5"',
    price: 199,
    inStock: true
  },
  ganesha: {
    id: 'ganesha',
    name: 'Ganesha',
    image: 'images/Ganesha.png',
    description: 'A divine representation of Lord Ganesha crafted with devotion and artistic excellence.',
    extendedDescription: 'This Ganesha artwork combines spiritual significance with artistic mastery. The intricate Lippan work and mirror details bring the divine form to life, creating a piece that is both a spiritual focal point and a stunning work of art.',
    size: '48" x 18"',
    price: 3999,
    inStock: true
  },
  nameplate: {
    id: 'nameplate',
    name: 'Name Plate',
    image: 'images/Name_Plate.png',
    description: 'Personalize your space with an elegant name plate featuring exquisite Lippan art.',
    extendedDescription: 'Transform your entrance with this personalized name plate that combines traditional Lippan art with modern design. Each piece is carefully crafted to incorporate your name into the artistic design, creating a unique and welcoming statement piece.',
    size: '14" diameter',
    price: 299,
    inStock: true
  },
  paisely: {
    id: 'paisely',
    name: 'Paisely',
    image: 'images/Paisely.png',
    description: 'A sophisticated interpretation of the classic paisley pattern in Lippan art.',
    extendedDescription: 'This elegant piece reimagines the timeless paisley pattern through the medium of Lippan art. The intricate details and mirror work create a dynamic interplay of light and shadow, while the pattern itself speaks to both traditional and contemporary design sensibilities.',
    size: '40" x 28"',
    price: 2499,
    inStock: true
  }
};

// Modal functionality
function createModal() {
  const modal = document.createElement('div');
  modal.className = 'product-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-modal">&times;</span>
      <div class="modal-grid">
        <div class="modal-image" style="position: relative;">
          <img src="" alt="Product Image">
          <p>Click to view in full screen</p>
        </div>
        <div class="modal-details">
          <h2></h2>
          <p class="extended-description"></p>
          <p class="size"><b>Size:</b></p>
          <p class="price"><b>Price:</b></p>
          <span class="stock"></span>
          <button class="btn add-to-cart" data-product-id="">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  
  // Close modal when clicking the X or outside the modal
  const closeBtn = modal.querySelector('.close-modal');
  const modalContent = modal.querySelector('.modal-content');
  
  function closeModal() {
    modal.classList.remove('show');
    modalContent.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300); // Match transition duration
  }
  
  closeBtn.onclick = closeModal;
  window.onclick = (event) => {
    if (event.target === modal) {
      closeModal();
    }
  };
  
  return modal;
}

// Initialize modal functionality
document.addEventListener('DOMContentLoaded', function() {
  const modal = createModal();
  const modalContent = modal.querySelector('.modal-content');
  const fullscreenModal = document.getElementById('fullscreen-modal');
  const fullscreenImage = fullscreenModal.querySelector('.fullscreen-image');
  const fullscreenGallery = fullscreenModal.querySelector('.fullscreen-gallery');
  const closeFullscreen = fullscreenModal.querySelector('.fullscreen-close');
  const prevButton = fullscreenModal.querySelector('.fullscreen-prev');
  const nextButton = fullscreenModal.querySelector('.fullscreen-next');
  const imageContainer = fullscreenModal.querySelector('.fullscreen-image-container');
  const zoomOverlay = fullscreenModal.querySelector('.zoom-overlay');
  
  let currentImageIndex = 0;
  let isZoomed = false;
  let isDragging = false;
  let startX, startY, translateX, translateY;
  let productImages = [];

  // Add click handlers to products and artwork
  document.querySelectorAll('.product, .artwork').forEach(item => {
    item.addEventListener('click', function(e) {
      if (!e.target.classList.contains('add-to-cart')) {
        const productId = this.dataset.productId;
        const productData = productsDB[productId];
        
        if (productData) {
          const modalImg = modal.querySelector('.modal-image img');
          modalImg.src = productData.image;
          modalImg.alt = productData.name;
          
          modal.querySelector('.modal-details h2').textContent = productData.name;
          modal.querySelector('.extended-description').textContent = productData.extendedDescription;
          modal.querySelector('.size').textContent = `Size: ${productData.size}`;
          modal.querySelector('.price').textContent = `$${productData.price}`;
          modal.querySelector('.stock').textContent = productData.inStock ? 'In Stock' : 'Out of Stock';
          modal.querySelector('.stock').className = `stock ${productData.inStock ? 'in-stock' : 'out-of-stock'}`;
          
          // Set the product ID on the modal's Add to Cart button
          modal.querySelector('.add-to-cart').dataset.productId = productId;
          
          // Set up product images array (you would need to add more images to your productsDB)
          productImages = [
            productData.image,
            productData.image,
            productData.image,
            productData.image,
            // Add more image variations here from your database
            /*productData.image.replace('.png', '_2.png'),
            productData.image.replace('.png', '_3.png'),
            productData.image.replace('.png', '_4.png')*/
          ];
          
          modal.style.display = 'block';
          // Trigger animations
          requestAnimationFrame(() => {
            modal.classList.add('show');
            modalContent.classList.add('show');
          });

          // Add click handler to modal image
          modalImg.addEventListener('click', function() {
            openFullscreenModal(0); // Open fullscreen with the first image
          });

          // Add click handler to the paragraph text
          const fullscreenText = modal.querySelector('.modal-image p');
          fullscreenText.addEventListener('click', function() {
            openFullscreenModal(0); // Open fullscreen with the first image
          });
        }
      }
    });
  });

  function openFullscreenModal(index) {
    currentImageIndex = index;
    fullscreenImage.src = productImages[index];
    updateGallery();
    fullscreenModal.style.display = 'block';
    requestAnimationFrame(() => {
      fullscreenModal.classList.add('show');
    });
    resetZoom();

    // Add event listener for keydown
    document.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowLeft') {
        showPreviousImage();
      } else if (event.key === 'ArrowRight') {
        showNextImage();
      }
    });
  }

  function updateGallery() {
    fullscreenGallery.innerHTML = '';
    productImages.forEach((img, idx) => {
      const thumbnail = document.createElement('img');
      thumbnail.src = img;
      thumbnail.className = `gallery-thumbnail${idx === currentImageIndex ? ' active' : ''}`;
      thumbnail.addEventListener('click', () => {
        currentImageIndex = idx;
        fullscreenImage.src = img;
        updateGallery();
        resetZoom();
      });
      fullscreenGallery.appendChild(thumbnail);
    });
  }

  function resetZoom() {
    isZoomed = false;
    imageContainer.classList.remove('zoomed');
    fullscreenImage.style.transform = 'none';
    zoomOverlay.textContent = 'Click to zoom';
    imageContainer.style.overflow = 'hidden'; // Disable scrolling when not zoomed
  }

  // Zoom functionality
  imageContainer.addEventListener('click', function(e) {
    if (!isZoomed) {
      isZoomed = true;
      imageContainer.classList.add('zoomed');
      zoomOverlay.textContent = 'Click to reset zoom';
      
      const rect = fullscreenImage.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xPercent = x / rect.width;
      const yPercent = y / rect.height;
      
      fullscreenImage.style.transform = 'scale(2.5)'; // Adjust scale as needed
      fullscreenImage.style.transformOrigin = `${xPercent * 100}% ${yPercent * 100}%`;
      imageContainer.style.overflow = 'auto'; // Enable scrolling when zoomed
    } else {
      resetZoom();
    }
  });

  // Drag functionality when zoomed
  imageContainer.addEventListener('mousedown', function(e) {
    if (!isZoomed) return;
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    const transform = window.getComputedStyle(fullscreenImage).getPropertyValue('transform');
    const matrix = new DOMMatrix(transform);
    translateX = matrix.m41;
    translateY = matrix.m42;
  });

  document.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    fullscreenImage.style.transform = `translate(${translateX + dx}px, ${translateY + dy}px) scale(2.5)`;
  });

  document.addEventListener('mouseup', function() {
    isDragging = false;
  });

  // Navigation buttons
  prevButton.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex - 1 + productImages.length) % productImages.length;
    fullscreenImage.src = productImages[currentImageIndex];
    updateGallery();
    resetZoom();
  });

  nextButton.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % productImages.length;
    fullscreenImage.src = productImages[currentImageIndex];
    updateGallery();
    resetZoom();
  });

  // Close fullscreen modal
  closeFullscreen.addEventListener('click', function() {
    fullscreenModal.classList.remove('show');
    setTimeout(() => {
      fullscreenModal.style.display = 'none';
      resetZoom();
    }, 300);
  });

  // Close on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      if (fullscreenModal.classList.contains('show')) {
        closeFullscreen.click();
      }
    }
  });

  // Add click handler for modal's Add to Cart button
  modal.querySelector('.add-to-cart').addEventListener('click', function(e) {
    e.stopPropagation();
    const productId = this.dataset.productId;
    if (productId && window.cart) {
      window.cart.addItem(productId);
      
      // Close the modal after adding to cart
      modal.classList.remove('show');
      modalContent.classList.remove('show');
      setTimeout(() => {
        modal.style.display = 'none';
      }, 300);
    }
  });

  // Function to handle keydown events
  function handleKeydown(event) {
    if (event.key === 'ArrowLeft') {
      showPreviousImage();
    } else if (event.key === 'ArrowRight') {
      showNextImage();
    }
  }

  // Function to show the previous image
  function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + productImages.length) % productImages.length;
    fullscreenImage.src = productImages[currentImageIndex];
    updateGallery();
    resetZoom();
  }

  // Function to show the next image
  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % productImages.length;
    fullscreenImage.src = productImages[currentImageIndex];
    updateGallery();
    resetZoom();
  }
});

// Cart functionality
class Cart {
  constructor() {
    this.items = {};
    this.loadFromLocalStorage();
    this.initializeCartUI();
  }

  loadFromLocalStorage() {
    const savedCart = localStorage.getItem('artesiaCart');
    if (savedCart) {
      this.items = JSON.parse(savedCart);
      this.updateCartCount();
      this.updateCartUI();
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('artesiaCart', JSON.stringify(this.items));
  }

  addItem(productId) {
    if (!this.items[productId]) {
      this.items[productId] = {
        quantity: 0,
        ...productsDB[productId]
      };
    }
    this.items[productId].quantity += 1;
    this.saveToLocalStorage();
    this.updateCartUI();
    this.showAddedToCartFeedback();
  }

  removeItem(productId) {
    delete this.items[productId];
    this.saveToLocalStorage();
    this.updateCartUI();
  }

  updateQuantity(productId, delta) {
    const item = this.items[productId];
    if (item) {
      const maxQuantity = 5; // Set maximum quantity
      if (item.quantity + delta > maxQuantity) {
        alert(`You can only add a maximum of ${maxQuantity} of this item.`);
        return; // Exit the function if the limit is exceeded
      }
      item.quantity += delta;
      if (item.quantity <= 0) {
        this.removeItem(productId);
      } else {
        this.saveToLocalStorage();
        this.updateCartUI();
      }
    }
  }

  getTotal() {
    return Object.values(this.items).reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  }

  updateCartCount() {
    const count = Object.values(this.items).reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
  }

  showAddedToCartFeedback() {
    const feedback = document.createElement('div');
    feedback.className = 'cart-feedback';
    feedback.textContent = 'Added to cart!';
    document.body.appendChild(feedback);

    setTimeout(() => {
      feedback.classList.add('show');
      setTimeout(() => {
        feedback.classList.remove('show');
        setTimeout(() => {
          feedback.remove();
        }, 300);
      }, 2000);
    }, 100);
  }

  updateCartUI() {
    this.updateCartCount();
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItemsContainer.innerHTML = '';
    
    if (Object.keys(this.items).length === 0) {
      // Add empty cart message and shop button
      const emptyCartMessage = document.createElement('div');
      emptyCartMessage.style.textAlign = 'center';
      emptyCartMessage.style.padding = '20px';
      emptyCartMessage.innerHTML = `
        <p style="margin-bottom: 20px">Your cart is empty</p>
        <a href="shop.html" class="btn">Start Shopping</a>
      `;
      cartItemsContainer.appendChild(emptyCartMessage);
      cartTotal.textContent = '$0.00';
      return;
    }
    
    Object.entries(this.items).forEach(([productId, item]) => {
      const itemElement = document.createElement('div');
      itemElement.className = 'cart-item';
      itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-details">
          <h3>${item.name}</h3>
          <div class="cart-item-price">$${item.price}</div>
          <div class="cart-item-quantity">
            <button class="quantity-btn minus" data-product-id="${productId}">-</button>
            <span>${item.quantity}</span>
            <button class="quantity-btn plus" data-product-id="${productId}">+</button>
          </div>
        </div>
        <button class="remove-item" data-product-id="${productId}">&times;</button>
      `;
      cartItemsContainer.appendChild(itemElement);
    });
    
    cartTotal.textContent = `$${this.getTotal().toFixed(2)}`;
  }

  initializeCartUI() {
    const cartBtn = document.getElementById('cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const closeCart = document.querySelector('.close-cart');
    const checkoutBtn = document.getElementById('checkout-btn');

    if (cartBtn) {
      cartBtn.addEventListener('click', () => {
        console.log("Cart button clicked");
        cartModal.style.display = 'block';
        setTimeout(() => cartModal.classList.add('show'), 10);
      });
    }

    if (closeCart) {
      closeCart.addEventListener('click', () => {
        cartModal.classList.remove('show');
        setTimeout(() => cartModal.style.display = 'none', 300);
      });
    }

    cartModal.addEventListener('click', (e) => {
      if (e.target === cartModal) {
        cartModal.classList.remove('show');
        setTimeout(() => cartModal.style.display = 'none', 300);
      }
    });

    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('add-to-cart')) {
        e.stopPropagation();
        const productId = e.target.closest('.product')?.dataset.productId;
        if (productId) {
          this.addItem(productId);
        }
      }
      
      if (e.target.classList.contains('quantity-btn')) {
        const productId = e.target.dataset.productId;
        const delta = e.target.classList.contains('plus') ? 1 : -1;
        this.updateQuantity(productId, delta);
      }
      
      if (e.target.classList.contains('remove-item')) {
        const productId = e.target.dataset.productId;
        this.removeItem(productId);
      }
    });

    checkoutBtn.addEventListener('click', () => {
      if (Object.keys(this.items).length === 0) {
        alert('Your cart is empty!');
        return;
      }
      // Here you would typically redirect to a checkout page
      // For now, we'll just show an alert
      alert('Proceeding to checkout... (This is a placeholder)');
    });
  }
}

// Initialize cart when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  window.cart = new Cart();
});

// Remove the old add to cart alert
document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    const oldClickListeners = button.getEventListeners?.('click') || [];
    oldClickListeners.forEach(listener => {
      button.removeEventListener('click', listener.listener);
    });
  });
});

// Add cart feedback styles
const style = document.createElement('style');
style.textContent = `
  .cart-feedback {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #C4A484;
    color: white;
    padding: 12px 24px;
    border-radius: 4px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
    z-index: 1000;
  }
  
  .cart-feedback.show {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

// Favorites functionality
class Favorites {
  constructor() {
    this.items = {};
    this.loadFromLocalStorage();
    this.initializeFavoritesUI();
  }

  loadFromLocalStorage() {
    const savedFavorites = localStorage.getItem('artesiaFavorites');
    if (savedFavorites) {
      this.items = JSON.parse(savedFavorites);
      this.updateFavoritesCount();
      this.updateFavoritesUI();
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('artesiaFavorites', JSON.stringify(this.items));
  }

  toggleFavorite(productId) {
    console.log(`Toggling favorite for product ID: ${productId}`);
    if (this.items[productId]) {
      delete this.items[productId];
      // Update heart icon in product card
      const productCard = document.querySelector(`.product[data-product-id="${productId}"]`);
      if (productCard) {
        const favoriteBtn = productCard.querySelector('.favorite-btn');
        const heartIcon = favoriteBtn.querySelector('i');
        if (heartIcon) {
          heartIcon.classList.remove('fas');
          heartIcon.classList.add('far');
        }
        favoriteBtn.classList.remove('favorited');
      }
    } else {
      this.items[productId] = {
        ...productsDB[productId]
      };
      // Update heart icon in product card
      const productCard = document.querySelector(`.product[data-product-id="${productId}"]`);
      if (productCard) {
        const favoriteBtn = productCard.querySelector('.favorite-btn');
        const heartIcon = favoriteBtn.querySelector('i');
        if (heartIcon) {
          heartIcon.classList.remove('far');
          heartIcon.classList.add('fas');
        }
        favoriteBtn.classList.add('favorited');
      }
    }
    this.saveToLocalStorage();
    this.updateFavoritesUI();
    this.showFavoritesFeedback(this.items[productId] ? 'Added to favorites!' : 'Removed from favorites!');
    return this.items[productId] !== undefined;
  }

  isFavorite(productId) {
    return this.items[productId] !== undefined;
  }

  updateFavoritesCount() {
    const count = Object.keys(this.items).length;
    const favoritesBtn = document.getElementById('favorites-btn');
    if (favoritesBtn) {
      const icon = favoritesBtn.querySelector('i');
      if (count > 0) {
        icon.classList.remove('far');
        icon.classList.add('fas');
      } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
      }
    }
  }

  showFavoritesFeedback(message) {
    const feedback = document.createElement('div');
    feedback.className = 'favorites-feedback';
    feedback.textContent = message;
    document.body.appendChild(feedback);

    setTimeout(() => {
      feedback.classList.add('show');
      setTimeout(() => {
        feedback.classList.remove('show');
        setTimeout(() => {
          feedback.remove();
        }, 300);
      }, 2000);
    }, 100);
  }

  updateFavoritesUI() {
    this.updateFavoritesCount();
    const favoritesItemsContainer = document.getElementById('favorites-items');
    if (!favoritesItemsContainer) return;
    
    favoritesItemsContainer.innerHTML = '';
    
    if (Object.keys(this.items).length === 0) {
      const emptyMessage = document.createElement('div');
      emptyMessage.style.textAlign = 'center';
      emptyMessage.style.padding = '20px';
      emptyMessage.innerHTML = `
        <p style="margin-bottom: 20px">Your favorites list is empty</p>
        <a href="shop.html" class="btn">Start Shopping</a>
      `;
      favoritesItemsContainer.appendChild(emptyMessage);
      return;
    }
    
    Object.entries(this.items).forEach(([productId, item]) => {
      const itemElement = document.createElement('div');
      itemElement.className = 'favorite-item';
      itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="favorite-item-details">
          <h3>${item.name}</h3>
          <div class="favorite-item-price">$${item.price}</div>
        </div>
        <div class="action-buttons">
          <button class="action-btn add-to-cart" data-product-id="${productId}" title="Add to Cart">
            <i class="fas fa-shopping-cart"></i>
          </button>
          <button class="action-btn remove-favorite" data-product-id="${productId}" title="Remove from Favorites">
            <i class="fas fa-times"></i>
          </button>
        </div>
      `;
      favoritesItemsContainer.appendChild(itemElement);
    });

    // Add the "Add All to Cart" button
    const addAllButton = document.createElement('div');
    addAllButton.className = 'add-all-container';
    addAllButton.innerHTML = `
      <button class="btn add-all-to-cart">Add All to Cart</button>
    `;
    favoritesItemsContainer.appendChild(addAllButton);

    // Add event listener for the Add All button
    const addAllToCartBtn = addAllButton.querySelector('.add-all-to-cart');
    addAllToCartBtn.addEventListener('click', () => {
      Object.keys(this.items).forEach(productId => {
        if (window.cart) {
          window.cart.addItem(productId);
        }
      });
    });
  }

  initializeFavoritesUI() {
    const favoritesBtn = document.getElementById('favorites-btn');
    const favoritesModal = document.getElementById('favorites-modal');
    const closeFavorites = document.querySelector('.close-favorites');

    if (favoritesBtn) {
      favoritesBtn.addEventListener('click', () => {
        favoritesModal.style.display = 'block';
        setTimeout(() => favoritesModal.classList.add('show'), 10);
      });
    }

    if (closeFavorites) {
      closeFavorites.addEventListener('click', () => {
        favoritesModal.classList.remove('show');
        setTimeout(() => favoritesModal.style.display = 'none', 300);
      });
    }

    favoritesModal.addEventListener('click', (e) => {
      if (e.target === favoritesModal) {
        favoritesModal.classList.remove('show');
        setTimeout(() => favoritesModal.style.display = 'none', 300);
      }
    });

    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('add-to-cart') && e.target.closest('.favorite-item')) {
        e.stopPropagation();
        const productId = e.target.dataset.productId;
        if (productId && window.cart) {
          window.cart.addItem(productId);
        }
      }
      
      if (e.target.classList.contains('remove-favorite')) {
        const productId = e.target.dataset.productId;
        if (productId) {
          this.toggleFavorite(productId);
        }
      }
    });
  }
}

// Initialize favorites when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  window.favorites = new Favorites();
  
  // Add favorite buttons to all products
  document.querySelectorAll('.product').forEach(product => {
    const productId = product.dataset.productId;
    const favoriteBtn = document.createElement('button');
    const isFavorite = window.favorites.isFavorite(productId);
    favoriteBtn.className = `favorite-btn${isFavorite ? ' favorited' : ''}`;
    favoriteBtn.innerHTML = `<i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i>`;
    
    // Add the favorite button directly to the product container
    product.appendChild(favoriteBtn);
    
    favoriteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isFavorite = window.favorites.toggleFavorite(productId);
      const icon = favoriteBtn.querySelector('i');
      if (isFavorite) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        favoriteBtn.classList.add('favorited');
      } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        favoriteBtn.classList.remove('favorited');
      }
    });
  });
});

const favoritesContainer = document.querySelector('.favorites-container');
if (favoritesContainer) {
  favoritesContainer.classList.add('show'); // Add the class to trigger the animation
}

// Email functionality
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return; // Only run on contact page

  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');
  
  function showMessage(element, duration = 5000) {
    element.style.display = 'block';
    setTimeout(() => {
      element.style.display = 'none';
    }, duration);
  }

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const submitButton = document.getElementById('send-message');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create the email body in the desired format
    const emailBody = `
      Name: ${name}
      Email: ${email}

      Dear Artesia Designs,
      ${message}

      Thank you,
      ${name}
    `;

    const templateParams = {
      to_email: 'kotasumedh@gmail.com', // Email recipient
      from_name: name, // Sender's name
      from_email: email, // Sender's email
      message: emailBody // Formatted message content
    };

    emailjs.send(
      'service_s571exl', // Replace with your EmailJS service ID
      'template_1tcjrli', // Replace with your EmailJS template ID
      templateParams
    )
    .then(function() {
      showMessage(successMessage);
      contactForm.reset();
    })
    .catch(function(error) {
      console.error('Failed to send email:', error);
      showMessage(errorMessage);
    })
    .finally(function() {
      submitButton.disabled = false;
      submitButton.textContent = 'Send Message';
    });
  });
});

// Add styles for success/error messages
const emailStyles = document.createElement('style');
emailStyles.textContent = `
  .message {
    padding: 15px;
    border-radius: 4px;
    margin-top: 20px;
    text-align: center;
  }

  .success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  .error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
`;
document.head.appendChild(emailStyles);

// Chat Popup Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Create chat popup elements
  const chatPopupHTML = `
    <button class="chat-trigger" id="chat-trigger">
      <i style="font-size:24px" class="fa">&#xf075;</i>
    </button>
    
    <div class="chat-popup" id="chat-popup">
      <div class="chat-header">
        <p>Send a message</p>
        <h3>How can we help?</h3>
        <p>We usually respond in a few hours</p>
      </div>
      <div class="chat-body">
        <form class="chat-form" id="chat-popup-form">
          <label for="chat-name">Name</label>
          <input type="text" required id="chat-name">
          <label for="chat-email">Email address</label>
          <input type="email" required id="chat-email">
          <label for="chat-message">How can we help?</label>
          <textarea required id="chat-message"></textarea>
          <button type="submit" id="send-message-btn" class="btn">Send a message</button>
        </form>
        <div id="chat-success-message" class="message success" style="display: none;"></div>
        <div id="chat-error-message" class="message error" style="display: none;"></div>
        <a href="https://wa.me/18133601236" target="_blank" class="whatsapp-btn">
          <i class="fab fa-whatsapp"></i>
          Chat on WhatsApp
        </a>
      </div>
      <div id="chat-confirmation" class="confirmation" style="display: none;">
        <h2>We have received your message.</h2>
        <p>We usually respond in a few hours.</p>
      </div>
    </div>
  `;

  // Add chat popup to body
  document.body.insertAdjacentHTML('beforeend', chatPopupHTML);

  // Get elements
  const chatTrigger = document.getElementById('chat-trigger');
  const chatPopup = document.getElementById('chat-popup');
  const chatForm = document.getElementById('chat-popup-form');
  const sendMessageBtn = document.getElementById('send-message-btn');
  const successMessage = document.getElementById('chat-success-message');
  const errorMessage = document.getElementById('chat-error-message');
  const confirmationMessage = document.getElementById('chat-confirmation');
  const icon = chatTrigger.querySelector('i'); // Get the icon element

  // Toggle chat popup
  chatTrigger.addEventListener('click', () => {
    const isVisible = chatPopup.classList.toggle('show'); // Toggle the 'show' class to show/hide the popup
    
    // Change the icon based on the popup state
    if (isVisible) {
      icon.innerHTML = '&#xf106;'; // Change to chevron down arrow
      icon.classList.add('rotate'); // Add rotation class
    } else {
      icon.innerHTML = '&#xf075;'; // Change back to message icon
      icon.classList.remove('rotate'); // Remove rotation class
    }
  });

  // Handle chat form submission
  sendMessageBtn.addEventListener('click', function(e) {
    e.preventDefault();

    // Reset error states
    const inputs = chatForm.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
      if (!input.checkValidity()) {
        input.classList.add('invalid'); // Add invalid class if invalid
        isValid = false;
      } else {
        input.classList.remove('invalid'); // Remove invalid class if valid
      }
    });

    if (!isValid) {
      errorMessage.textContent = 'Please fill in all fields correctly.';
      errorMessage.style.display = 'block';
      successMessage.style.display = 'none'; // Hide success message
      confirmationMessage.style.display = 'none'; // Hide confirmation message
      return; // Prevent form submission
    }

    const name = document.getElementById('chat-name').value;
    const email = document.getElementById('chat-email').value;
    const message = document.getElementById('chat-message').value;

    // Create the email body in the desired format
    const emailBody = `
      Name: ${name}
      Email: ${email}

      Dear Artesia Designs,
      ${message}

      Thank you,
      ${name}
    `;

    const templateParams = {
      to_email: 'kotasumedh@gmail.com',
      from_name: name,
      from_email: email,
      message: emailBody
    };

    // Send email using EmailJS
    emailjs.send('service_s571exl', 'template_1tcjrli', templateParams)
      .then(function() {
        successMessage.textContent = 'Message sent successfully!';
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none'; // Hide error message
        chatForm.reset();

        // Show confirmation message
        confirmationMessage.style.display = 'flex';
        confirmationMessage.style.opacity = '0'; // Start with opacity 0
        confirmationMessage.style.transition = 'opacity 0.5s ease'; // Transition for opacity
        setTimeout(() => {
          confirmationMessage.style.opacity = '1'; // Fade in
        }, 10); // Delay to allow the transition to take effect
      })
      .catch(function(error) {
        console.error('Failed to send email:', error);
        errorMessage.textContent = 'Failed to send message. Please try again.';
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none'; // Hide success message
        confirmationMessage.style.display = 'none'; // Hide confirmation message
      });
  });

  // Add focus and blur event listeners for input validation
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.classList.remove('invalid'); // Remove invalid class on focus
    });
  });
});

// Add favorites feedback styles
const favoritesStyle = document.createElement('style');
favoritesStyle.textContent = `
  .favorites-feedback {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #C4A484;
    color: white;
    padding: 12px 24px;
    border-radius: 4px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
    z-index: 1000;
  }
  
  .favorites-feedback.show {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(favoritesStyle);

// Prevent right-click and dragging on images and videos
document.addEventListener('contextmenu', function(e) {
  if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
    e.preventDefault();
  }
});

document.addEventListener('dragstart', function(e) {
  if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
    e.preventDefault();
  }
});

// Initialize testimonials carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const testimonialsGrid = document.querySelector('.testimonials-grid');
  if (!testimonialsGrid) return; // Only run on pages with testimonials

  const testimonials = Array.from(testimonialsGrid.querySelectorAll('.testimonial'));
  const prevButton = testimonialsGrid.querySelector('.testimonial-arrow.prev');
  const nextButton = testimonialsGrid.querySelector('.testimonial-arrow.next');
  let currentIndex = 0;
  let intervalId = null;

  // Set initial state
  testimonials[currentIndex].classList.add('active');

  function cycleTestimonials(direction = 'next') {
    // Remove previous class from all testimonials
    testimonials.forEach(t => t.classList.remove('previous'));
    
    // Add previous class to current testimonial
    testimonials[currentIndex].classList.remove('active');
    testimonials[currentIndex].classList.add('previous');
    
    // Update index based on direction
    if (direction === 'next') {
      currentIndex = (currentIndex + 1) % testimonials.length;
    } else {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    }
    
    // Add active class to next testimonial
    testimonials[currentIndex].classList.add('active');
  }

  // Start automatic cycling
  function startAutoPlay() {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(() => cycleTestimonials('next'), 7000); // Increased to 7 seconds
  }

  // Add click handlers for manual navigation
  prevButton.addEventListener('click', () => {
    cycleTestimonials('prev');
    startAutoPlay(); // Reset the timer when manually navigating
  });

  nextButton.addEventListener('click', () => {
    cycleTestimonials('next');
    startAutoPlay(); // Reset the timer when manually navigating
  });

  // Start the automatic cycling
  startAutoPlay();
});