<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MedOne AI - Taiwan Medical Licensing Exam Preparation</title>
  <style>
    /* ===================================
       GLOBAL STYLES
       =================================== */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html, body {
      width: 100%;
      height: 100%;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      color: #333;
      overflow-x: hidden;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 20px;
    }

    /* ===================================
       HEADER & NAVIGATION
       =================================== */
    .header {
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
      margin-bottom: 40px;
      text-align: center;
    }

    .header h1 {
      font-size: 42px;
      color: #667eea;
      margin-bottom: 10px;
      font-weight: 700;
    }

    .header p {
      font-size: 18px;
      color: #666;
      margin-bottom: 20px;
    }

    .nav-tabs {
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 25px;
    }

    .nav-btn {
      padding: 12px 25px;
      background: #f0f0f0;
      border: 2px solid #ddd;
      border-radius: 8px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
      transition: all 0.3s;
      color: #333;
    }

    .nav-btn:hover {
      background: #667eea;
      color: white;
      border-color: #667eea;
    }

    .nav-btn.active {
      background: #667eea;
      color: white;
      border-color: #667eea;
    }

    /* ===================================
       TABS & CONTENT SECTIONS
       =================================== */
    .tab-content {
      display: none;
      animation: fadeIn 0.5s ease-in;
    }

    .tab-content.active {
      display: block;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* ===================================
       DASHBOARD STYLES
       =================================== */
    .dashboard-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 25px;
      margin-bottom: 40px;
    }

    .stat-card {
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
      transition: all 0.3s;
      border-left: 4px solid #667eea;
    }

    .stat-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
    }

    .stat-label {
      font-size: 12px;
      color: #999;
      text-transform: uppercase;
      margin-bottom: 10px;
      font-weight: 600;
      letter-spacing: 1px;
    }

    .stat-value {
      font-size: 36px;
      font-weight: bold;
      color: #667eea;
      margin-bottom: 5px;
    }

    .stat-description {
      font-size: 13px;
      color: #666;
    }

    /* ===================================
       BUTTON STYLES
       =================================== */
    .btn {
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
      transition: all 0.3s;
      display: inline-block;
    }

    .btn-primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
    }

    .btn-secondary {
      background: #f0f0f0;
      color: #333;
      border: 2px solid #ddd;
    }

    .btn-secondary:hover {
      background: #e0e0e0;
      border-color: #999;
    }

    .btn-danger {
      background: #dc3545;
      color: white;
    }

    .btn-danger:hover {
      background: #c82333;
    }

    .btn-success {
      background: #28a745;
      color: white;
    }

    .btn-success:hover {
      background: #218838;
    }

    .btn-group {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin: 20px 0;
    }

    /* ===================================
       PRACTICE MODE
       =================================== */
    .practice-container {
      background: white;
      border-radius: 16px;
      padding: 40px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
      margin-bottom: 30px;
    }

    .question-display {
      margin-bottom: 30px;
    }

    .question-meta {
      display: flex;
      gap: 15px;
      margin-bottom: 20px;
      font-size: 12px;
      color: #999;
      flex-wrap: wrap;
    }

    .question-meta span {
      padding: 4px 10px;
      background: #f0f0f0;
      border-radius: 4px;
    }

    .question-stem {
      font-size: 20px;
      font-weight: 600;
      color: #333;
      margin-bottom: 25px;
      line-height: 1.6;
    }

    .answers-container {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 25px;
    }

    .answer-option {
      padding: 15px;
      border: 2px solid #ddd;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s;
      background: white;
    }

    .answer-option:hover {
      border-color: #667eea;
      background: #f0f2f5;
    }

    .answer-option.selected {
      background: #e0e7ff;
      border-color: #667eea;
    }

    .answer-option.correct {
      background: #d4edda;
      border-color: #28a745;
    }

    .answer-option.incorrect {
      background: #f8d7da;
      border-color: #dc3545;
    }

    .feedback {
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
      display: none;
    }

    .feedback.show {
      display: block;
    }

    .feedback.correct {
      background: #d4edda;
      border-left: 4px solid #28a745;
      color: #155724;
    }

    .feedback.incorrect {
      background: #f8d7da;
      border-left: 4px solid #dc3545;
      color: #721c24;
    }

    /* ===================================
       EXAM MODE
       =================================== */
    .exam-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin-bottom: 40px;
    }

    .exam-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s;
    }

    .exam-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    }

    .exam-card-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 20px;
      font-size: 18px;
      font-weight: bold;
    }

    .exam-card-body {
      padding: 20px;
    }

    .exam-stat {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #eee;
      font-size: 14px;
    }

    .exam-stat:last-child {
      border-bottom: none;
    }

    .exam-stat-label {
      color: #666;
    }

    .exam-stat-value {
      color: #333;
      font-weight: bold;
    }

    /* ===================================
       ANALYTICS & CHARTS
       =================================== */
    .analytics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 25px;
      margin-bottom: 40px;
    }

    .chart-container {
      background: white;
      border-radius: 16px;
      padding: 30px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    }

    .chart-title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
      margin-bottom: 20px;
    }

    .chart-bar {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
    }

    .chart-bar-label {
      width: 100px;
      font-size: 13px;
      color: #666;
    }

    .chart-bar-value {
      flex: 1;
      height: 30px;
      background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
      border-radius: 4px;
      margin: 0 15px;
    }

    .chart-bar-percent {
      width: 60px;
      text-align: right;
      font-weight: bold;
      color: #333;
    }

    /* ===================================
       REVIEW SECTION
       =================================== */
    .review-container {
      background: white;
      border-radius: 16px;
      padding: 30px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    }

    .filter-bar {
      display: flex;
      gap: 15px;
      margin-bottom: 25px;
      flex-wrap: wrap;
    }

    .filter-select {
      padding: 10px 15px;
      border: 2px solid #ddd;
      border-radius: 8px;
      font-size: 14px;
      cursor: pointer;
      transition: border-color 0.2s;
    }

    .filter-select:focus {
      outline: none;
      border-color: #667eea;
    }

    .question-review-item {
      background: #f8f9fa;
      border-left: 4px solid #667eea;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 15px;
    }

    .question-review-item.wrong {
      border-left-color: #dc3545;
      background: #fff5f5;
    }

    .question-review-item.correct {
      border-left-color: #28a745;
      background: #f0fdf4;
    }

    .question-review-title {
      font-weight: 600;
      color: #333;
      margin-bottom: 10px;
    }

    .question-review-details {
      font-size: 13px;
      color: #666;
      line-height: 1.6;
    }

    /* ===================================
       TO-DO LIST STYLES
       =================================== */
    .todo-container {
      background: white;
      border-radius: 16px;
      padding: 30px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    }

    .todo-header {
      margin-bottom: 25px;
      padding-bottom: 20px;
      border-bottom: 2px solid #667eea;
    }

    .todo-controls {
      display: flex;
      gap: 15px;
      margin-bottom: 25px;
      flex-wrap: wrap;
    }

    .search-input {
      flex: 1;
      min-width: 250px;
      padding: 12px 15px;
      border: 2px solid #ddd;
      border-radius: 8px;
      font-size: 14px;
      transition: border-color 0.2s;
    }

    .search-input:focus {
      outline: none;
      border-color: #667eea;
    }

    .todo-nav {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
      border-bottom: 1px solid #eee;
      padding-bottom: 15px;
      flex-wrap: wrap;
    }

    .todo-nav-btn {
      padding: 10px 15px;
      background: none;
      border: none;
      border-bottom: 3px solid transparent;
      cursor: pointer;
      font-weight: 600;
      color: #666;
      transition: all 0.2s;
    }

    .todo-nav-btn:hover {
      color: #667eea;
    }

    .todo-nav-btn.active {
      border-bottom-color: #667eea;
      color: #667eea;
    }

    .task-card {
      background: #f8f9fa;
      border-left: 4px solid #667eea;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 12px;
      transition: all 0.2s;
      cursor: pointer;
    }

    .task-card:hover {
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    }

    .task-card.completed {
      opacity: 0.6;
      text-decoration: line-through;
      background: #e8e8e8;
    }

    .task-checkbox {
      width: 18px;
      height: 18px;
      cursor: pointer;
      margin-right: 12px;
      vertical-align: middle;
    }

    .task-title {
      font-weight: 600;
      color: #333;
      display: inline-block;
    }

    .task-meta {
      display: flex;
      gap: 10px;
      margin-top: 8px;
      font-size: 12px;
      color: #999;
      flex-wrap: wrap;
    }

    .task-badge {
      padding: 2px 8px;
      background: #e0e7ff;
      color: #667eea;
      border-radius: 12px;
    }

    /* ===================================
       MODAL STYLES
       =================================== */
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      z-index: 1000;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .modal.active {
      display: flex;
    }

    .modal-content {
      background: white;
      border-radius: 16px;
      max-width: 700px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      padding: 40px;
      position: relative;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }

    .close-btn {
      position: absolute;
      top: 15px;
      right: 15px;
      background: none;
      border: none;
      font-size: 28px;
      cursor: pointer;
      color: #999;
      transition: color 0.2s;
    }

    .close-btn:hover {
      color: #333;
    }

    .modal-title {
      font-size: 24px;
      font-weight: 700;
      color: #333;
      margin-bottom: 20px;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-label {
      display: block;
      margin-bottom: 8px;
      font-weight: 600;
      color: #333;
      font-size: 14px;
    }

    .form-input {
      width: 100%;
      padding: 12px 15px;
      border: 2px solid #ddd;
      border-radius: 8px;
      font-size: 14px;
      font-family: inherit;
      transition: border-color 0.2s;
    }

    .form-input:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    .form-textarea {
      resize: vertical;
      min-height: 100px;
    }

    .form-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 15px;
    }

    .modal-actions {
      display: flex;
      gap: 10px;
      justify-content: flex-end;
      margin-top: 30px;
    }

    /* ===================================
       TABLES
       =================================== */
    .data-table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }

    .data-table th {
      background: #f0f0f0;
      padding: 12px;
      text-align: left;
      font-weight: 600;
      color: #333;
      border-bottom: 2px solid #ddd;
    }

    .data-table td {
      padding: 12px;
      border-bottom: 1px solid #eee;
    }

    .data-table tr:hover {
      background: #f8f9fa;
    }

    /* ===================================
       PROGRESS BARS
       =================================== */
    .progress-bar {
      width: 100%;
      height: 8px;
      background: #ddd;
      border-radius: 4px;
      overflow: hidden;
      margin: 10px 0;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
      transition: width 0.3s;
    }

    /* ===================================
       ALERTS
       =================================== */
    .alert {
      padding: 15px 20px;
      border-radius: 8px;
      margin-bottom: 20px;
      border-left: 4px solid;
    }

    .alert-success {
      background: #d4edda;
      border-color: #28a745;
      color: #155724;
    }

    .alert-error {
      background: #f8d7da;
      border-color: #dc3545;
      color: #721c24;
    }

    .alert-warning {
      background: #fff3cd;
      border-color: #ffc107;
      color: #856404;
    }

    .alert-info {
      background: #d1ecf1;
      border-color: #0c5460;
      color: #0c5460;
    }

    /* ===================================
       EMPTY STATE
       =================================== */
    .empty-state {
      text-align: center;
      padding: 60px 20px;
      color: #999;
    }

    .empty-state-icon {
      font-size: 48px;
      margin-bottom: 15px;
    }

    .empty-state-text {
      font-size: 18px;
      margin-bottom: 20px;
    }

    /* ===================================
       LOADING SPINNER
       =================================== */
    .spinner {
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 3px solid #f0f0f0;
      border-top: 3px solid #667eea;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    /* ===================================
       RESPONSIVE DESIGN
       =================================== */
    @media (max-width: 1024px) {
      .dashboard-grid,
      .exam-grid,
      .analytics-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      }

      .header {
        padding: 30px 20px;
      }

      .header h1 {
        font-size: 28px;
      }
    }

    @media (max-width: 768px) {
      .container {
        padding: 15px;
      }

      .header {
        padding: 20px;
        margin-bottom: 25px;
      }

      .header h1 {
        font-size: 24px;
      }

      .nav-tabs {
        gap: 10px;
      }

      .nav-btn {
        padding: 10px 15px;
        font-size: 12px;
      }

      .dashboard-grid,
      .exam-grid,
      .analytics-grid {
        grid-template-columns: 1fr;
      }

      .practice-container {
        padding: 20px;
      }

      .question-stem {
        font-size: 16px;
      }

      .btn-group {
        flex-direction: column;
      }

      .btn {
        width: 100%;
      }

      .filter-bar {
        flex-direction: column;
      }

      .filter-select,
      .search-input {
        width: 100%;
      }

      .modal-content {
        padding: 20px;
        width: 95%;
      }

      .form-grid {
        grid-template-columns: 1fr;
      }

      .modal-actions {
        flex-direction: column-reverse;
      }

      .modal-actions .btn {
        width: 100%;
      }

      .stat-card {
        padding: 20px;
      }

      .stat-value {
        font-size: 28px;
      }

      .todo-controls {
        flex-direction: column;
      }

      .todo-nav {
        flex-direction: column;
        gap: 0;
      }

      .todo-nav-btn {
        border-bottom: none;
        border-left: 3px solid transparent;
        text-align: left;
      }

      .todo-nav-btn.active {
        border-left-color: #667eea;
        border-bottom: none;
      }
    }

    @media (max-width: 480px) {
      .header h1 {
        font-size: 20px;
      }

      .nav-tabs {
        flex-direction: column;
      }

      .nav-btn {
        width: 100%;
      }

      .stat-value {
        font-size: 24px;
      }

      .modal-content {
        padding: 15px;
      }

      .question-stem {
        font-size: 14px;
      }

      .answer-option {
        padding: 12px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- ===== HEADER ===== -->
    <div class="header">
      <h1>🏥 MedOne AI</h1>
      <p>Taiwan Medical Licensing Exam Preparation System</p>
      <p style="font-size: 14px; color: #999; margin-top: 10px;">Adaptive Learning • Unlimited Mock Exams • AI-Powered Questions • Progress Tracking</p>
      
      <div class="nav-tabs">
        <button class="nav-btn active" onclick="switchTab('dashboard')">📊 Dashboard</button>
        <button class="nav-btn" onclick="switchTab('practice')">📚 Practice</button>
        <button class="nav-btn" onclick="switchTab('exam')">📝 Mock Exams</button>
        <button class="nav-btn" onclick="switchTab('analytics')">📈 Analytics</button>
        <button class="nav-btn" onclick="switchTab('review')">🔍 Review</button>
        <button class="nav-btn" onclick="switchTab('todo')">✓ To-Do List</button>
      </div>
    </div>

    <!-- ===== DASHBOARD TAB ===== -->
    <div id="dashboard" class="tab-content active">
      <div class="dashboard-grid">
        <div class="stat-card">
          <div class="stat-label">Overall Accuracy</div>
          <div class="stat-value" id="overallAccuracy">0%</div>
          <div class="progress-bar">
            <div class="progress-fill" id="accuracyBar" style="width: 0%;"></div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-label">Average Response Time</div>
          <div class="stat-value" id="avgResponseTime">0s</div>
          <div class="stat-description">Seconds per question</div>
        </div>

        <div class="stat-card">
          <div class="stat-label">Questions Today</div>
          <div class="stat-value" id="questionsToday">0</div>
          <div class="stat-description">Questions answered</div>
        </div>

        <div class="stat-card">
          <div class="stat-label">Study Streak</div>
          <div class="stat-value" id="studyStreak">0</div>
          <div class="stat-description">Consecutive days</div>
        </div>

        <div class="stat-card">
          <div class="stat-label">Exams Generated</div>
          <div class="stat-value" id="examsGenerated">0</div>
          <div class="stat-description">Mock exams created</div>
        </div>

        <div class="stat-card">
          <div class="stat-label">Weakest Subject</div>
          <div class="stat-value" id="weakestSubject" style="font-size: 18px;">—</div>
          <div class="stat-description">Needs more focus</div>
        </div>
      </div>

      <div class="btn-group">
        <button class="btn btn-primary" onclick="startQuickPractice()">▶ Start Quick Practice</button>
        <button class="btn btn-secondary" onclick="generateNewExam()">+ Generate Mock Exam</button>
        <button class="btn btn-secondary" onclick="viewRecentExams()">📋 Recent Exams</button>
      </div>
    </div>

    <!-- ===== PRACTICE TAB ===== -->
    <div id="practice" class="tab-content">
      <div class="practice-container">
        <div id="practiceLoading" style="text-align: center; padding: 40px;">
          <div class="spinner"></div>
          <p style="margin-top: 15px; color: #666;">Loading question...</p>
        </div>

        <div id="practiceContent" style="display: none;">
          <div class="question-display">
            <div class="question-meta">
              <span id="questionNumber">Question 1 of 200</span>
              <span id="questionSubject">Subject: —</span>
              <span id="questionDifficulty">Difficulty: Medium</span>
              <span id="questionHighYield">—</span>
            </div>

            <div class="question-stem" id="questionStem">Loading question...</div>

            <div class="answers-container" id="answersContainer"></div>

            <div class="feedback" id="feedback"></div>

            <div style="display: none;" id="explanationBox">
              <h4 style="margin-bottom: 10px; color: #333;">Explanation</h4>
              <p id="explanation" style="color: #666; line-height: 1.6;"></p>
            </div>
          </div>

          <div class="btn-group">
            <button class="btn btn-primary" id="submitBtn" onclick="submitAnswer()">Submit Answer</button>
            <button class="btn btn-secondary" id="skipBtn" onclick="skipQuestion()">Skip Question</button>
            <button class="btn btn-secondary" id="bookmarkBtn" onclick="bookmarkQuestion()">⭐ Bookmark</button>
            <button class="btn btn-secondary" onclick="exitPractice()">Exit Practice</button>
          </div>

          <div style="margin-top: 20px;">
            <div class="progress-bar">
              <div class="progress-fill" id="sessionProgress" style="width: 0%;"></div>
            </div>
            <p style="text-align: center; font-size: 12px; color: #999;">Session Progress</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ===== MOCK EXAMS TAB ===== -->
    <div id="exam" class="tab-content">
      <div style="margin-bottom: 30px;">
        <h2 style="color: #333; margin-bottom: 20px;">📝 Mock Exams (Taiwan Medical Step 1)</h2>
        <p style="color: #666; margin-bottom: 20px;">
          200 questions following official distribution:
          Anatomy 31 • Physiology 27 • Biochemistry 27 • Pharmacology 25 • Pathology 25 • 
          Microbiology 17 • Immunology 11 • Histology 10 • Public Health 15 • Embryology 5 • Parasitology 7
        </p>
        <button class="btn btn-primary" onclick="generateNewExam()">+ Generate New Mock Exam</button>
      </div>

      <div class="exam-grid" id="examGrid">
        <div class="empty-state">
          <div class="empty-state-icon">📚</div>
          <div class="empty-state-text">No exams generated yet</div>
          <p>Click "Generate New Mock Exam" to create your first exam</p>
        </div>
      </div>
    </div>

    <!-- ===== ANALYTICS TAB ===== -->
    <div id="analytics" class="tab-content">
      <div class="analytics-grid">
        <div class="chart-container">
          <h3 class="chart-title">📊 Accuracy by Subject</h3>
          <div id="accuracyChart"></div>
        </div>

        <div class="chart-container">
          <h3 class="chart-title">📊 Accuracy by Difficulty</h3>
          <div id="difficultyChart"></div>
        </div>

        <div class="chart-container">
          <h3 class="chart-title">📊 Accuracy by Category</h3>
          <div id="categoryChart"></div>
        </div>
      </div>

      <div class="chart-container">
        <h3 class="chart-title">📊 Weekly Progress</h3>
        <table class="data-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Questions</th>
              <th>Accuracy</th>
              <th>Time Spent</th>
            </tr>
          </thead>
          <tbody id="weeklyProgressTable">
            <tr>
              <td colspan="4" style="text-align: center; color: #999;">No data available</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ===== REVIEW TAB ===== -->
    <div id="review" class="tab-content">
      <div class="review-container">
        <h2 style="color: #333; margin-bottom: 20px;">🔍 Review Questions</h2>

        <div class="filter-bar">
          <select class="filter-select" onchange="filterReviewQuestions('category', this.value)">
            <option value="">All Categories</option>
            <option value="wrong">Wrong Answers</option>
            <option value="bookmarked">Bookmarked</option>
            <option value="correct">Correct Answers</option>
          </select>

          <select class="filter-select" onchange="filterReviewQuestions('subject', this.value)">
            <option value="">All Subjects</option>
            <option value="Anatomy">Anatomy</option>
            <option value="Physiology">Physiology</option>
            <option value="Biochemistry">Biochemistry</option>
            <option value="Pharmacology">Pharmacology</option>
            <option value="Pathology">Pathology</option>
          </select>

          <select class="filter-select" onchange="filterReviewQuestions('difficulty', this.value)">
            <option value="">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div id="reviewQuestionsContainer">
          <div class="empty-state">
            <div class="empty-state-icon">📚</div>
            <div class="empty-state-text">No questions to review</div>
            <p>Practice some questions to see them here</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ===== TO-DO LIST TAB ===== -->
    <div id="todo" class="tab-content">
      <div class="todo-container">
        <div class="todo-header">
          <h2 style="color: #333;">✓ Study To-Do List</h2>
          <p style="color: #666; margin-top: 5px;">Track your medical exam preparation tasks</p>
        </div>

        <div class="todo-controls">
          <input type="text" class="search-input" id="todoSearch" placeholder="Search tasks..." 
            onkeyup="searchTodoTasks(this.value)">
          <button class="btn btn-primary" onclick="openNewTaskModal()">+ New Task</button>
          <button class="btn btn-secondary" onclick="showTaskStats()">📊 Stats</button>
        </div>

        <div class="todo-nav">
          <button class="todo-nav-btn active" onclick="switchTodoView('all')">All (<span id="allTasksCount">0</span>)</button>
          <button class="todo-nav-btn" onclick="switchTodoView('today')">Today (<span id="todayTasksCount">0</span>)</button>
          <button class="todo-nav-btn" onclick="switchTodoView('overdue')">Overdue (<span id="overdueTasksCount">0</span>)</button>
          <button class="todo-nav-btn" onclick="switchTodoView('completed')">Completed (<span id="completedTasksCount">0</span>)</button>
        </div>

        <div id="todoList"></div>
      </div>
    </div>
  </div>

  <!-- ===== MODALS ===== -->
  <div id="newTaskModal" class="modal">
    <div class="modal-content">
      <button class="close-btn" onclick="closeModal('newTaskModal')">×</button>
      <h2 class="modal-title">Create New Task</h2>

      <form onsubmit="createTask(event)">
        <div class="form-group">
          <label class="form-label">Task Title *</label>
          <input type="text" class="form-input" id="taskTitle" placeholder="Enter task title..." required>
        </div>

        <div class="form-group">
          <label class="form-label">Description</label>
          <textarea class="form-input form-textarea" id="taskDescription" placeholder="Task description..."></textarea>
        </div>

        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">Category</label>
            <select class="form-input" id="taskCategory">
              <option value="Study">📚 Study</option>
              <option value="Review">🔄 Review</option>
              <option value="Practice">✍️ Practice</option>
              <option value="Research">🔍 Research</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Priority</label>
            <select class="form-input" id="taskPriority">
              <option value="Medium">🟡 Medium</option>
              <option value="High">🔴 High</option>
              <option value="Low">🟢 Low</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Due Date</label>
            <input type="date" class="form-input" id="taskDueDate">
          </div>

          <div class="form-group">
            <label class="form-label">Subject</label>
            <select class="form-input" id="taskSubject">
              <option value="">Select Subject</option>
              <option value="Anatomy">Anatomy</option>
              <option value="Physiology">Physiology</option>
              <option value="Biochemistry">Biochemistry</option>
              <option value="Pharmacology">Pharmacology</option>
            </select>
          </div>
        </div>

        <div class="modal-actions">
          <button type="button" class="btn btn-secondary" onclick="closeModal('newTaskModal')">Cancel</button>
          <button type="submit" class="btn btn-primary">Create Task</button>
        </div>
      </form>
    </div>
  </div>

  <div id="taskStatsModal" class="modal">
    <div class="modal-content">
      <button class="close-btn" onclick="closeModal('taskStatsModal')">×</button>
      <h2 class="modal-title">📊 Task Statistics</h2>

      <div class="dashboard-grid">
        <div class="stat-card">
          <div class="stat-label">Total Tasks</div>
          <div class="stat-value" id="totalTasksStat">0</div>
        </div>

        <div class="stat-card">
          <div class="stat-label">Completed</div>
          <div class="stat-value" id="completedTasksStat">0</div>
        </div>

        <div class="stat-card">
          <div class="stat-label">Pending</div>
          <div class="stat-value" id="pendingTasksStat">0</div>
        </div>

        <div class="stat-card">
          <div class="stat-label">Completion Rate</div>
          <div class="stat-value" id="completionRateStat">0%</div>
        </div>
      </div>

      <button type="button" class="btn btn-secondary" style="width: 100%; margin-top: 20px;" onclick="closeModal('taskStatsModal')">Close</button>
    </div>
  </div>

  <!-- ===== SCRIPTS ===== -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

  <script>
    // ===================================
    // GLOBAL STATE MANAGEMENT
    // ===================================
    let appState = {
      currentTab: 'dashboard',
      currentPracticeQuestion: null,
      currentExam: null,
      sessionQuestions: 0,
      sessionCorrect: 0,
      taskManager: null,
      tasks: [],
      currentTodoView: 'all'
    };

    // ===================================
    // TAB SWITCHING
    // ===================================
    function switchTab(tabName) {
      // Hide all tabs
      const tabs = document.querySelectorAll('.tab-content');
      tabs.forEach(tab => tab.classList.remove('active'));

      // Deactivate all buttons
      const buttons = document.querySelectorAll('.nav-btn');
      buttons.forEach(btn => btn.classList.remove('active'));

      // Show selected tab
      document.getElementById(tabName).classList.add('active');
      event.target.classList.add('active');

      appState.currentTab = tabName;

      // Load tab-specific data
      if (tabName === 'dashboard') {
        updateDashboard();
      } else if (tabName === 'practice') {
        loadPracticeQuestion();
      } else if (tabName === 'analytics') {
        updateAnalytics();
      } else if (tabName === 'exam') {
        loadExamHistory();
      } else if (tabName === 'todo') {
        updateTodoList();
      }
    }

    // ===================================
    // DASHBOARD FUNCTIONS
    // ===================================
    function updateDashboard() {
      const stats = JSON.parse(localStorage.getItem('medone_user_stats')) || {
        accuracy: 0,
        avgTime: 0,
        todayQuestions: 0,
        streak: 0,
        examsGenerated: 0,
        weakestSubject: 'N/A'
      };

      document.getElementById('overallAccuracy').textContent = stats.accuracy + '%';
      document.getElementById('accuracyBar').style.width = stats.accuracy + '%';
      document.getElementById('avgResponseTime').textContent = Math.round(stats.avgTime) + 's';
      document.getElementById('questionsToday').textContent = stats.todayQuestions;
      document.getElementById('studyStreak').textContent = stats.streak + ' days';
      document.getElementById('examsGenerated').textContent = stats.examsGenerated;
      document.getElementById('weakestSubject').textContent = stats.weakestSubject;
    }

    // ===================================
    // PRACTICE FUNCTIONS
    // ===================================
    function loadPracticeQuestion() {
      document.getElementById('practiceLoading').style.display = 'block';
      document.getElementById('practiceContent').style.display = 'none';

      // Simulate loading question
      setTimeout(() => {
        const question = generateSampleQuestion();
        displayQuestion(question);

        document.getElementById('practiceLoading').style.display = 'none';
        document.getElementById('practiceContent').style.display = 'block';
      }, 500);
    }

    function generateSampleQuestion() {
      const subjects = ['Anatomy', 'Physiology', 'Biochemistry', 'Pharmacology', 'Pathology'];
      const difficulties = ['Easy', 'Medium', 'Hard'];

      return {
        id: 'q_' + Date.now(),
        subject: subjects[Math.floor(Math.random() * subjects.length)],
        difficulty: difficulties[Math.floor(Math.random() * difficulties.length)],
        highYield: Math.random() > 0.7,
        stem: 'Which of the following best describes the mechanism of action of penicillin antibiotics?',
        choices: [
          'Inhibition of bacterial protein synthesis',
          'Inhibition of bacterial cell wall synthesis',
          'Inhibition of bacterial DNA replication',
          'Competitive inhibition of bacterial metabolic enzymes'
        ],
        correctAnswer: 1,
        explanation: 'Penicillin antibiotics inhibit bacterial cell wall synthesis by binding to penicillin-binding proteins and inhibiting cross-linking of peptidoglycan, leading to cell wall weakening and bacterial lysis.'
      };
    }

    function displayQuestion(question) {
      appState.currentPracticeQuestion = question;

      document.getElementById('questionNumber').textContent = `Question 1 of 200`;
      document.getElementById('questionSubject').textContent = `Subject: ${question.subject}`;
      document.getElementById('questionDifficulty').textContent = `Difficulty: ${question.difficulty}`;
      document.getElementById('questionHighYield').textContent = question.highYield ? '⭐ High-Yield' : '';
      document.getElementById('questionStem').textContent = question.stem;

      const answersHtml = question.choices.map((choice, idx) => `
        <div class="answer-option" onclick="selectAnswer(${idx})">
          <strong>${String.fromCharCode(65 + idx)}.</strong> ${choice}
        </div>
      `).join('');

      document.getElementById('answersContainer').innerHTML = answersHtml;
      document.getElementById('feedback').classList.remove('show');
      document.getElementById('explanationBox').style.display = 'none';
      document.getElementById('submitBtn').textContent = 'Submit Answer';
    }

    function selectAnswer(index) {
      document.querySelectorAll('.answer-option').forEach(opt => opt.classList.remove('selected'));
      document.querySelectorAll('.answer-option')[index].classList.add('selected');
      appState.userSelectedAnswer = index;
    }

    function submitAnswer() {
      if (appState.userSelectedAnswer === undefined) {
        alert('Please select an answer');
        return;
      }

      const question = appState.currentPracticeQuestion;
      const isCorrect = appState.userSelectedAnswer === question.correctAnswer;

      // Update answer display
      document.querySelectorAll('.answer-option').forEach((opt, idx) => {
        opt.classList.remove('selected');
        if (idx === question.correctAnswer) {
          opt.classList.add('correct');
        } else if (idx === appState.userSelectedAnswer && !isCorrect) {
          opt.classList.add('incorrect');
        }
      });

      // Show feedback
      const feedback = document.getElementById('feedback');
      feedback.classList.add('show');
      feedback.classList.toggle('correct', isCorrect);
      feedback.classList.toggle('incorrect', !isCorrect);
      feedback.innerHTML = isCorrect 
        ? '<strong>✓ Correct!</strong>' 
        : '<strong>✗ Incorrect</strong>';

      // Show explanation
      document.getElementById('explanation').textContent = question.explanation;
      document.getElementById('explanationBox').style.display = 'block';

      // Update stats
      appState.sessionQuestions++;
      if (isCorrect) appState.sessionCorrect++;
      updateSessionProgress();

      // Change submit button to next
      document.getElementById('submitBtn').textContent = 'Next Question';
      document.getElementById('submitBtn').onclick = loadNextQuestion;
    }

    function loadNextQuestion() {
      appState.userSelectedAnswer = undefined;
      loadPracticeQuestion();
    }

    function skipQuestion() {
      appState.sessionQuestions++;
      loadNextQuestion();
    }

    function bookmarkQuestion() {
      alert('Question bookmarked!');
    }

    function exitPractice() {
      switchTab('dashboard');
      showAlert(`Session Complete: ${appState.sessionCorrect}/${appState.sessionQuestions} Correct (${Math.round(appState.sessionCorrect/appState.sessionQuestions*100)}%)`);
    }

    function updateSessionProgress() {
      const percent = (appState.sessionQuestions / 200) * 100;
      document.getElementById('sessionProgress').style.width = percent + '%';
    }

    function startQuickPractice() {
      switchTab('practice');
      appState.sessionQuestions = 0;
      appState.sessionCorrect = 0;
      loadPracticeQuestion();
    }

    // ===================================
    // EXAM FUNCTIONS
    // ===================================
    function generateNewExam() {
      const examId = 'Mock' + String(Math.floor(Math.random() * 1000)).padStart(3, '0');
      const exam = {
        id: examId,
        timestamp: new Date().toISOString(),
        totalQuestions: 200,
        questions: 0,
        score: 0,
        status: 'pending'
      };

      const exams = JSON.parse(localStorage.getItem('medone_exams') || '[]');
      exams.push(exam);
      localStorage.setItem('medone_exams', JSON.stringify(exams));

      showAlert(`✓ ${examId} created with 200 questions`);
      loadExamHistory();
    }

    function loadExamHistory() {
      const exams = JSON.parse(localStorage.getItem('medone_exams') || '[]');
      const grid = document.getElementById('examGrid');

      if (exams.length === 0) {
        grid.innerHTML = `
          <div class="empty-state">
            <div class="empty-state-icon">📚</div>
            <div class="empty-state-text">No exams generated yet</div>
            <p>Click "Generate New Mock Exam" to create your first exam</p>
          </div>
        `;
        return;
      }

      grid.innerHTML = exams.map(exam => `
        <div class="exam-card">
          <div class="exam-card-header">${exam.id}</div>
          <div class="exam-card-body">
            <div class="exam-stat">
              <span class="exam-stat-label">Status</span>
              <span class="exam-stat-value">${exam.status}</span>
            </div>
            <div class="exam-stat">
              <span class="exam-stat-label">Questions</span>
              <span class="exam-stat-value">${exam.totalQuestions}</span>
            </div>
            <div class="exam-stat">
              <span class="exam-stat-label">Created</span>
              <span class="exam-stat-value">${new Date(exam.timestamp).toLocaleDateString()}</span>
            </div>
            <button class="btn btn-primary" style="width: 100%; margin-top: 15px;" onclick="startExam('${exam.id}')">Start Exam</button>
          </div>
        </div>
      `).join('');
    }

    function startExam(examId) {
      switchTab('practice');
      showAlert(`Starting exam ${examId}...`);
    }

    function viewRecentExams() {
      switchTab('exam');
    }

    // ===================================
    // ANALYTICS FUNCTIONS
    // ===================================
    function updateAnalytics() {
      // Sample data
      const accuracyBySubject = {
        'Anatomy': 85,
        'Physiology': 78,
        'Biochemistry': 82,
        'Pharmacology': 75,
        'Pathology': 88
      };

      const accuracyByDifficulty = {
        'Easy': 92,
        'Medium': 82,
        'Hard': 68
      };

      const accuracyByCategory = {
        'Clinical Scenario': 80,
        'Basic Recall': 88,
        'Mechanism': 75,
        'Diagnosis': 82
      };

      // Render charts
      renderChart('accuracyChart', accuracyBySubject);
      renderChart('difficultyChart', accuracyByDifficulty);
      renderChart('categoryChart', accuracyByCategory);

      // Update weekly progress
      updateWeeklyProgress();
    }

    function renderChart(elementId, data) {
      const html = Object.entries(data).map(([label, value]) => `
        <div class="chart-bar">
          <div class="chart-bar-label">${label}</div>
          <div class="chart-bar-value" style="width: ${value}%;"></div>
          <div class="chart-bar-percent">${value}%</div>
        </div>
      `).join('');

      document.getElementById(elementId).innerHTML = html;
    }

    function updateWeeklyProgress() {
      const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      const html = days.map(day => `
        <tr>
          <td>${day}</td>
          <td>${Math.floor(Math.random() * 50)}</td>
          <td>${Math.floor(Math.random() * 100)}%</td>
          <td>${Math.floor(Math.random() * 300)} min</td>
        </tr>
      `).join('');

      document.getElementById('weeklyProgressTable').innerHTML = html;
    }

    // ===================================
    // REVIEW FUNCTIONS
    // ===================================
    function filterReviewQuestions(type, value) {
      // Filter implementation
      console.log(`Filtering review by ${type}: ${value}`);
    }

    // ===================================
    // TO-DO LIST FUNCTIONS
    // ===================================
    function openNewTaskModal() {
      document.getElementById('newTaskModal').classList.add('active');
    }

    function showTaskStats() {
      const stats = {
        total: appState.tasks.length,
        completed: appState.tasks.filter(t => t.completed).length,
        pending: appState.tasks.filter(t => !t.completed).length
      };

      stats.completionRate = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

      document.getElementById('totalTasksStat').textContent = stats.total;
      document.getElementById('completedTasksStat').textContent = stats.completed;
      document.getElementById('pendingTasksStat').textContent = stats.pending;
      document.getElementById('completionRateStat').textContent = stats.completionRate + '%';

      document.getElementById('taskStatsModal').classList.add('active');
    }

    function createTask(event) {
      event.preventDefault();

      const task = {
        id: 'task_' + Date.now(),
        title: document.getElementById('taskTitle').value,
        description: document.getElementById('taskDescription').value,
        category: document.getElementById('taskCategory').value,
        priority: document.getElementById('taskPriority').value,
        dueDate: document.getElementById('taskDueDate').value,
        subject: document.getElementById('taskSubject').value,
        completed: false,
        createdDate: new Date().toISOString()
      };

      appState.tasks.push(task);
      saveTasks();

      closeModal('newTaskModal');
      updateTodoList();
      showAlert('✓ Task created successfully!');
    }

    function updateTodoList() {
      let tasks = appState.tasks;

      if (appState.currentTodoView === 'today') {
        const today = new Date().toISOString().split('T')[0];
        tasks = tasks.filter(t => t.dueDate === today);
      } else if (appState.currentTodoView === 'completed') {
        tasks = tasks.filter(t => t.completed);
      } else if (appState.currentTodoView === 'overdue') {
        const today = new Date().toISOString().split('T')[0];
        tasks = tasks.filter(t => !t.completed && t.dueDate < today);
      }

      const html = tasks.map(task => `
        <div class="task-card ${task.completed ? 'completed' : ''}">
          <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} 
            onchange="toggleTask('${task.id}')">
          <span class="task-title">${task.title}</span>
          <div class="task-meta">
            <span class="task-badge">${task.category}</span>
            <span class="task-badge">${task.priority}</span>
            ${task.dueDate ? `<span class="task-badge">Due: ${task.dueDate}</span>` : ''}
          </div>
        </div>
      `).join('');

      document.getElementById('todoList').innerHTML = html || '<p style="text-align: center; color: #999;">No tasks</p>';

      // Update counts
      updateTaskCounts();
    }

    function toggleTask(taskId) {
      const task = appState.tasks.find(t => t.id === taskId);
      if (task) {
        task.completed = !task.completed;
        saveTasks();
        updateTodoList();
      }
    }

    function switchTodoView(view) {
      appState.currentTodoView = view;
      document.querySelectorAll('.todo-nav-btn').forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');
      updateTodoList();
    }

    function searchTodoTasks(query) {
      // Search implementation
      console.log('Searching tasks:', query);
    }

    function updateTaskCounts() {
      const today = new Date().toISOString().split('T')[0];

      document.getElementById('allTasksCount').textContent = appState.tasks.length;
      document.getElementById('todayTasksCount').textContent = 
        appState.tasks.filter(t => t.dueDate === today).length;
      document.getElementById('overdueTasksCount').textContent = 
        appState.tasks.filter(t => !t.completed && t.dueDate < today).length;
      document.getElementById('completedTasksCount').textContent = 
        appState.tasks.filter(t => t.completed).length;
    }

    function saveTasks() {
      localStorage.setItem('medone_tasks', JSON.stringify(appState.tasks));
    }

    function loadTasks() {
      const saved = localStorage.getItem('medone_tasks');
      appState.tasks = saved ? JSON.parse(saved) : [];
    }

    // ===================================
    // UTILITY FUNCTIONS
    // ===================================
    function closeModal(modalId) {
      document.getElementById(modalId).classList.remove('active');
    }

    function showAlert(message) {
      alert(message);
    }

    // ===================================
    // INITIALIZATION
    // ===================================
    document.addEventListener('DOMContentLoaded', () => {
      loadTasks();
      updateDashboard();
      updateTodoList();

      console.log('MedOne AI initialized successfully');
    });

    // Close modals on background click
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
      }
    });
  </script>
</body>
</html>
