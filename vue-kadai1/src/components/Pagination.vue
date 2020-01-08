<template>
  <ul class="pagination">
    <li>
      <button
        class="pagination__button"
        :disabled="isInFirstPage()"
        @click="movePageButton('first')"
      >&lt;&lt;</button>
    </li>
    <li>
      <button
        class="pagination__button"
        :disabled="isInFirstPage()"
        @click="movePageButton('prev')"
      >	&lt;</button>
    </li>
    <li v-for="page in pageRange" :key="page.number">
      <button
        class="pagination__button -number"
        :class="{active: isInActivePage(page.number)}"
        @click="movePage(page.number)"
      >
        {{ page.number }}
      </button>
    </li>
    <li>
      <button
        class="pagination__button"
        :disabled="isInLastPage()"
        @click="movePageButton('next')"
      >&gt;</button>
    </li>
    <li>
      <button
        class="pagination__button"
        :disabled="isInLastPage()"
        @click="movePageButton('last')"
      >&gt;&gt;</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 5
    }
  },
  computed: {
    startPage: function() {
      if (this.currentPage <= 2) {
        return 1;
      } else if(this.currentPage >= this.totalPages - 1) {
        return this.totalPages - this.maxVisibleButtons + 1;
      } else {
        return this.currentPage - 2;
      }
    },
    pageRange: function() {
      const pageRange = [...Array(this.maxVisibleButtons)].map((current, i) => i + this.startPage);
      return pageRange.map(page => {
        return {
          number: page
        }
      })
    }
  },
  methods: {
    isInActivePage: function(page) {
      return this.currentPage === page;
    },
    isInFirstPage: function() {
      return this.currentPage === 1;
    },
    isInLastPage: function() {
      return this.currentPage === this.totalPages;
    },
    movePage: function(page) {
      this.$emit('move-page', page);
    },
    movePageButton: function(button) {
      this.$emit('move-page-button', button);
    }
  }
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  &__button {
    background: #e8edeb;
    border: none;
    margin: 0 2px;
    cursor: pointer;
    font-size: 14px;
    padding: 5px 10px;
    min-width: 25px;
    &:disabled {
      opacity: .6;
    }
    @media(max-width: 400px) {
      font-size: 12px;
      padding: 5px;
    }
  }
  & .-number {
    width: 35px;
    @media(max-width: 400px) {
      width: 30px;
    }
    &.active {
      background: #41b883;
      color: #fff;
    }
  }
}
</style>
