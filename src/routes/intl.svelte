<svelte:head>
	<title>Intl example</title>
</svelte:head>

<script>
  import { getContext } from "svelte"

  const { t } = getContext('intl')
</script>

<h1>Intl example</h1>

<p>{t('hello')}</p>
