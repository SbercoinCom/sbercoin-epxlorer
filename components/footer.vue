<template>
  <footer>
    <div class="container">
      <h3 class="is-size-4 is-uppercase">{{ $t('footer.contact_us') }}</h3>
      <div class="line"></div>
      <a href="mailto:hello@sbercoin.com">hello@sbercoin.com</a>
      <ul class="links">
        <li>
          <a target="_blank" href="https://medium.com/@sbercoin">
            <Icon icon="medium" brands /> {{ $t('footer.medium') }}
          </a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/Sbercoin_com">
            <Icon icon="twitter" brands /> {{ $t('footer.twitter') }}
          </a>
        </li>
        <li>
          <a target="_blank" href="https://sbercoin.com">
            <span class="fab sbercoin-icon sbercoin-icon--sbercoin"></span> Sbercoin.com
          </a>
        </li>
        <li>
          <a target="_blank" href="https://wallet.sbercoin.com/">
            <span class="fab sbercoin-icon sbercoin-icon--sbercoin"></span> {{ $t('misc.web_wallet') }}
          </a>
        </li>
        <li>
          <a target="_blank" href="https://ide.sbercoin.com/">
            <span class="fab sbercoin-icon sbercoin-icon--sbercoin"></span> IDE
          </a>
        </li>
      </ul>
      <div class="copyright">
        2020 Sbercoin.com CHAIN FOUNDATION &copy; {{$t('footer.rights_reserved')}}
      </div>
    </div>
  </footer>
</template>

<style lang="less" scoped>
  footer {
    padding-top: 6rem;
    padding-bottom: 6rem;
    background-color: #171a1e;
    text-align: center;
    color: white;
  }
  a:link, a:visited, a:hover, a:active {
    color: inherit;
  }
  .line {
    width: 2rem;
    height: 1px;
    margin: 0.5rem auto;
    background-color: white;
  }
  .links {
    display: flex;
    max-width: 40rem;
    margin-left: auto;
    margin-right: auto;
    padding: 0.5rem;
    border-bottom: 1px solid rgba(242, 242, 242, 0.2);
    @media (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: space-around;
      margin-top: 2rem;
      margin-bottom: 2rem;
      > li {
        flex: 50%;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
      }
    }
    @media (min-width: 769px) {
      justify-content: space-between;
      margin-top: 2.5rem;
      margin-bottom: 2.5rem;
    }
  }
  span.fab, span.fas span.sbercoin-icon{
    font-size: 2em;
    vertical-align: middle;
  }
</style>
