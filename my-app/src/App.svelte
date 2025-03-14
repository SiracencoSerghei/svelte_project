<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';

  let posts = [
    {
      id: 1,
      title: "My First Post",
      subtitle: "This is a subtitle for the first post.",
      author: { name: 'Sergio' },
      date: 'March 14, 2025',
    },
    {
      id: 2,
      title: "Another Blog Post",
      subtitle: "Subtitle of another post.",
      author: { name: 'Sergio' },
      date: 'March 15, 2025',
    }
  ];
</script>

<Header />

<!-- Main Content-->
<div class="container px-4 px-lg-5">
  <div class="row gx-4 gx-lg-5 justify-content-center">
    <div class="col-md-10 col-lg-8 col-xl-7">
      <!-- Post preview-->
      {#each posts as post}
        <div class="post-preview">
          <a href="/post/{post.id}">
            <h2 class="post-title">{post.title}</h2>
            <h3 class="post-subtitle">{post.subtitle}</h3>
          </a>
          <p class="post-meta">
            Posted by
            <a href="#">{post.author.name}</a>
            on {post.date}
          </p>
        </div>
        <hr class="my-4" />
      {/each}

      <!-- Pager-->
      <div class="d-flex justify-content-end mb-4">
        <a class="btn btn-secondary text-uppercase" href="#!">Older Posts →</a>
      </div>
    </div>
  </div>
</div>

<Footer />