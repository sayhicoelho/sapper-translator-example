<script>
  import { getContext } from 'svelte'

  const { t } = getContext('intl')
</script>

<svelte:head>
  <title>Intl example</title>
</svelte:head>

<h1>Intl example</h1>

<p>{t('hello')}</p>
