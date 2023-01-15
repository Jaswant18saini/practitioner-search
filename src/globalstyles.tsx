import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   /// Grid system
//
// Generate semantic grid columns with these mixins.

@mixin make-container() {
  width: 100%;
  padding-right: ($grid-gutter-width / 2);
  padding-left: ($grid-gutter-width / 2);
  margin-right: auto;
  margin-left: auto;
}


// For each breakpoint, define the maximum width of the container in a media query
@mixin make-container-max-widths($max-widths: $container-max-widths, $breakpoints: $grid-breakpoints) {
  @each $breakpoint, $container-max-width in $max-widths {
    @include media-breakpoint-up($breakpoint, $breakpoints) {
      max-width: $container-max-width;
    }
  }
}

@mixin make-row() {
  display: flex;
  flex-wrap: wrap;
  margin-right: ($grid-gutter-width / -2);
  margin-left: ($grid-gutter-width / -2);
}

@mixin make-col-ready() {
  position: relative; 
  width: 100%;
  min-height: 1px; // Prevent collapsing
  padding-right: ($grid-gutter-width / 2);
  padding-left: ($grid-gutter-width / 2);
}

@mixin make-col($size, $columns: $grid-columns) {
  flex: 0 0 percentage($size / $columns); 
  max-width: percentage($size / $columns);
}

@mixin make-col-offset($size, $columns: $grid-columns) {
  $num: $size / $columns;
  margin-left: if($num == 0, 0, percentage($num));
}
/* remove end */






`;
export default GlobalStyle;
