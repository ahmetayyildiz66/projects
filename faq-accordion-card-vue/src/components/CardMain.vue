<template>
  <main class="main">
      <img src="@/assets/illustration-box-desktop.svg" alt="box" class="box">
      <div class="card">
          <div class="card__img">
              <img src="@/assets/illustration-woman-online-mobile.svg"
                alt="illustration woman online mobile" class="card__img--mobile" />
              <img src="@/assets/illustration-woman-online-desktop.svg"
                alt="illustration woman online mobile" class="card__img--desktop">
          </div>
      </div>
  </main>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.main {
    position: relative;
    background-color: var(--clr-white);
    border-radius: var(--size-border-radius);
    width: 32rem;
    margin: 14rem 2rem 6rem;
    background: url(../assets/bg-pattern-mobile.svg), var(--clr-white);
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: 25rem;
}

.box {
    display: none;
}

.card {
    &__img {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -60%);
        width: 25rem;
        z-index: 2;

        &--desktop {
            display: none;
        }
    }
}

@include responsive($bp-desktop) {
    .main {
        width: 87rem;
        background: url(../assets/bg-pattern-desktop.svg), var(--clr-white);
        background-repeat: no-repeat;
        background-position: -57rem 64%;
        margin: 0;
    }

    .box {
        display: unset;
        position: absolute;
        left: 0;
        top: 50%;
        z-index: 5;
        transform: translate(-50%, -30%);
        animation: updown 2s infinite;
    }

    .card {
        margin: 4rem auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 5rem;
        height: 50rem;
        overflow: hidden;

        &__img {
            position: inherit;
            top: inherit;
            left: inherit;
            transform: none;
            transform: translate(-30%, 12%);
            height: 46rem;

            &--mobile {
                display: none;
            }

            &--desktop {
                display: unset;
            }
        }
    }
}
</style>
