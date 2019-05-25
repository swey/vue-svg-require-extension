Vue SVG Require Extension
============================

Require extension for SVG support in **server side rendered** Vue

# Install
Install via npm:

    npm install vue-svg-require-extension

# Usage

Simply include `vue-svg-require-extension` in your project:

    require('vue-svg-require-extension');

After this you can import SVG files like every other Vue component.

Example Vue SFC (ES5):
```
<template>
    <div>
        <IconSVG/>
    </div>
</template>

<script>
import IconSVG from '@assets/svg/icon.svg';

export default {
    components: {
        IconSVG
    }
};
</script>
```
