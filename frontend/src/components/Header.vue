<template>
        <header class="p-3 mb-3 border-bottom">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
              <!-- <img class="logo" src="/logo.png" alt="Logo"> -->
            </a>
    
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><router-link class="nav-link px-2" to="/">Таблица</router-link></li>
              <li><router-link class="nav-link px-2" to="/chart">График</router-link></li>
              <li><CitySelector/></li>
            </ul>
    
            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input type="search" class="form-control" placeholder="Поиск..." aria-label="Search">
            </form>
    
            <div class="dropdown text-end">
              <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">

              </a>
              <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                <li><a class="dropdown-item" href="#">#</a></li>
                <li><a class="dropdown-item" href="#">#</a></li>
                <li><a class="dropdown-item" href="#">#</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">#</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
</template>


<script>
import CitySelector from '@/components/CitySelector.vue'
export default {
  name: 'Header',
  components: {
    CitySelector
  }
}
</script>
