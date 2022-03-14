
<template>
        <input class="form-control" type="string" :value="value" @input="$emit('input', $event.target.value)" />
</template>

<script>
export default {
    props: {
        value: String,
    }
}

</script>
