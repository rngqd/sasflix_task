<script setup lang="ts">
import type {NuxtError} from '#app'

const props = defineProps({
  error: Object as () => NuxtError,
});

onMounted(() => {
  if (props?.error?.statusCode === 404) {
    clearError({redirect: '/404'});
  } else {
    clearError({redirect: '/'});
  }
});
</script>