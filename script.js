document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  function setTheme(theme) {
    if (theme === 'dark') {
      body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
    updateThemeButton();
  });


  const savedTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const initialTheme = savedTheme || systemTheme;
  setTheme(initialTheme);

  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  function updateThemeButton() {
    const themeToggle = document.getElementById('theme-toggle');
    const isDark = document.body.classList.contains('dark');
    themeToggle.innerHTML = isDark ? `<span class="material-symbols-outlined">light_mode</span>` : `<span class="material-symbols-outlined">dark_mode</span>`;
  }
  updateThemeButton();

  const labTabs = document.querySelectorAll('.lab-tab');
  const tabContents = document.querySelectorAll('.tab-content');
  const tabIndicator = document.querySelector('.lab-tab-indicator');

  labTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      labTabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      const tabId = tab.dataset.tab;
      const tabContent = document.getElementById(`${tabId}-content`);
      if (tabContent) {
        tabContent.classList.add('active');
      }

      moveTabIndicator(tab);
    });
  });

  function moveTabIndicator(tab) {
    tabIndicator.style.left = tab.offsetLeft + 'px';
    tabIndicator.style.width = tab.offsetWidth + 'px';
  }

  const activeTab = document.querySelector('.lab-tab.active');
  if (activeTab) {
    moveTabIndicator(activeTab);
  }

  window.addEventListener('resize', () => {
    const activeTab = document.querySelector('.lab-tab.active');
    if (activeTab) {
      moveTabIndicator(activeTab);
    }
  });

  const stars = document.querySelectorAll('.star');
  const feedbackText = document.getElementById('feedback-text');
  const submitFeedbackButton = document.getElementById('submit-feedback');
  let rating = 0;

  stars.forEach(star => {
    star.addEventListener('click', () => {
      rating = parseInt(star.dataset.rating);
      updateStars(rating);
    });
  });

  function updateStars(rating) {
    stars.forEach(star => {
      star.classList.remove('active');
      if (parseInt(star.dataset.rating) <= rating) {
        star.classList.add('active');
      }
    });
  }

  submitFeedbackButton.addEventListener('click', () => {
    const feedback = feedbackText.value;
    if (rating === 0) {
      alert('Please give a rating before submitting feedback.');
      return;
    }

    if (feedback.trim() === '') {
      alert('Please enter your feedback.');
      return;
    }

    alert(`Rating: ${rating} stars\nFeedback: ${feedback}`);

    updateStars(0);
    feedbackText.value = '';
    rating = 0;
  });


  document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    function setTheme(theme) {
      if (theme === 'dark') {
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }

    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark');
      localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
      updateThemeButton();
    });

    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);

    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    function updateThemeButton() {
      const themeToggle = document.getElementById('theme-toggle');
      const isDark = document.body.classList.contains('dark');
      themeToggle.innerHTML = isDark ? `<span class="material-symbols-outlined">light_mode</span>` : `<span class="material-symbols-outlined">dark_mode</span>`;
    }
    updateThemeButton();

    const labTabs = document.querySelectorAll('.lab-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    const tabIndicator = document.querySelector('.lab-tab-indicator');

    labTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        labTabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        const tabId = tab.dataset.tab;
        const tabContent = document.getElementById(`${tabId}-content`);
        if (tabContent) {
          tabContent.classList.add('active');
        }

        moveTabIndicator(tab);
      });
    });

    function moveTabIndicator(tab) {
      tabIndicator.style.left = tab.offsetLeft + 'px';
      tabIndicator.style.width = tab.offsetWidth + 'px';
    }
    const activeTab = document.querySelector('.lab-tab.active');
    if (activeTab) {
      moveTabIndicator(activeTab);
    }

    window.addEventListener('resize', () => {
      const activeTab = document.querySelector('.lab-tab.active');
      if (activeTab) {
        moveTabIndicator(activeTab);
      }
    });

    const stars = document.querySelectorAll('.star');
    const feedbackText = document.getElementById('feedback-text');
    const submitFeedbackButton = document.getElementById('submit-feedback');
    let rating = 0;

    stars.forEach(star => {
      star.addEventListener('click', () => {
        rating = parseInt(star.dataset.rating);
        updateStars(rating);
      });
    });

    function updateStars(rating) {
      stars.forEach(star => {
        star.classList.remove('active');
        if (parseInt(star.dataset.rating) <= rating) {
          star.classList.add('active');
        }
      });
    }

    submitFeedbackButton.addEventListener('click', () => {
      const feedback = feedbackText.value;
      if (rating === 0) {
        alert('Please give a rating before submitting feedback.');
        return;
      }

      if (feedback.trim() === '') {
        alert('Please enter your feedback.');
        return;
      }

      alert(`Rating: ${rating} stars\nFeedback: ${feedback}`);

      updateStars(0);
      feedbackText.value = '';
      rating = 0;
    });

    const commentsContainer = document.querySelector('.discussion-thread');
    const newCommentText = document.getElementById('new-comment');
    const addCommentButton = document.getElementById('post-comment');

    let comments = [{
        author: 'User123',
        avatar: 'https://via.placeholder.com/40',
        timestamp: '2 hours ago',
        content: 'Why does Bubble Sort need n-1 passes?',
        likes: 15,
        replies: [{
          author: 'Dr. Smith',
          avatar: 'https://via.placeholder.com/40',
          timestamp: '1 hour ago',
          content: 'Each pass places the next largest unsorted element in its correct position.',
          likes: 8
        }]
      },
      {
        author: 'CodeMaster',
        avatar: 'https://via.placeholder.com/40',
        timestamp: '1 hour ago',
        content: 'Great explanation, thanks!',
        likes: 12,
        replies: []
      }
    ];

    function renderComments() {
      commentsContainer.innerHTML = '';
      comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `
          <div class="comment-header">
            <img src="${comment.avatar}" alt="User Avatar" class="user-avatar">
            <div class="user-info">
              <span class="username">${comment.author}</span>
              <span class="timestamp">${comment.timestamp}</span>
            </div>
          </div>
          <div class="comment-content">
            ${comment.content}
          </div>
          <div class="comment-actions">
            <button class="reply-button">Reply</button>
            <span class="like-count">${comment.likes}</span>
          </div>
          <div class="replies">
            ${comment.replies.map(reply => `
              <div class="comment reply">
                <div class="comment-header">
                  <img src="${reply.avatar}" alt="User Avatar" class="user-avatar">
                  <div class="user-info">
                    <span class="username">${reply.author}</span>
                    <span class="timestamp">${reply.timestamp}</span>
                  </div>
                </div>
                <div class="comment-content">
                  ${reply.content}
                </div>
                <div class="comment-actions">
                  <button class="reply-button">Reply</button>
                  <span class="like-count">${reply.likes}</span>
                </div>
              </div>
            `).join('')}
          </div>
        `;
        commentsContainer.appendChild(commentDiv);
      });
    }

    addCommentButton.addEventListener('click', () => {
      const commentText = newCommentText.value;
      if (commentText.trim() !== '') {
        const newComment = {
          author: 'Anonymous',
          avatar: 'https://via.placeholder.com/40',
          timestamp: 'Just now',
          content: commentText,
          likes: 0,
          replies: []
        };
        comments.push(newComment);
        newCommentText.value = '';
        renderComments();
      }
    });

    renderComments();
  });

});