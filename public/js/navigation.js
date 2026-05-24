/* ============================================
 * Navigation — Panels, status, sidebar
 * ============================================ */

        function updateStatus(connected) {
            const pill = document.getElementById('statusPill');
            pill.className = `status-pill ${connected ? 'connected' : 'disconnected'}`;
            pill.querySelector('span').textContent = connected ? 'Connected' : 'Offline';

            // Sync topbar status dot
            const topbarDot = document.getElementById('topbarStatusDot');
            if (topbarDot) {
                topbarDot.className = `topbar-status ${connected ? 'online' : ''}`;
            }
        }

        // ====================================================================
        // View Switching (simplified - Chat is always visible)
        // ====================================================================

        // Shared panel-switching logic for both sidebar and topbar and bottombar
        function switchPanel(panel) {
            // Update active states on sidebar, topbar, and bottombar
            document.querySelectorAll('.sidebar-item').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.topbar-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.bottombar-btn').forEach(b => b.classList.remove('active'));
            
            const sidebarBtn = document.querySelector(`.sidebar-item[data-panel="${panel}"]`);
            const topbarBtn = document.querySelector(`.topbar-btn[data-panel="${panel}"]`);
            const bottombarBtn = document.querySelector(`.bottombar-btn[data-panel="${panel}"]`);
            
            if (sidebarBtn) sidebarBtn.classList.add('active');
            if (topbarBtn) topbarBtn.classList.add('active');
            if (bottombarBtn) bottombarBtn.classList.add('active');

            if (panel === 'settings') {
                document.getElementById('settingsPanel').style.display = 'block';
                document.getElementById('assistPanel').style.display = 'none';
                closeFilesPanel();
                loadSettings();
            } else if (panel === 'files') {
                document.getElementById('settingsPanel').style.display = 'none';
                document.getElementById('assistPanel').style.display = 'none';
                openFilesPanel();
            } else if (panel === 'assist') {
                document.getElementById('assistPanel').style.display = 'block';
                document.getElementById('settingsPanel').style.display = 'none';
                closeFilesPanel();
                loadAssistChatHistory();
                loadAssistStatusBadge();
            } else if (panel === 'chat') {
                document.getElementById('settingsPanel').style.display = 'none';
                document.getElementById('assistPanel').style.display = 'none';
                closeFilesPanel();
            }
        }

        // Sidebar Nav
        document.querySelectorAll('.sidebar-item').forEach(btn => {
            btn.addEventListener('click', () => switchPanel(btn.dataset.panel));
        });

        // Topbar Nav
        document.querySelectorAll('.topbar-btn').forEach(btn => {
            btn.addEventListener('click', () => switchPanel(btn.dataset.panel));
        });
        
        // Bottombar Nav
        document.querySelectorAll('.bottombar-btn').forEach(btn => {
            btn.addEventListener('click', () => switchPanel(btn.dataset.panel));
        });

        function closePanel() {
            document.getElementById('settingsPanel').style.display = 'none';
            document.getElementById('assistPanel').style.display = 'none';
            closeFilesPanel();
            document.querySelectorAll('.sidebar-item').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.topbar-btn').forEach(b => b.classList.remove('active'));
            const sidebarChat = document.querySelector('.sidebar-item[data-panel="chat"]');
            const topbarChat = document.querySelector('.topbar-btn[data-panel="chat"]');
            if (sidebarChat) sidebarChat.classList.add('active');
            if (topbarChat) topbarChat.classList.add('active');
        }

        // ====================================================================
        // Chat
        // ====================================================================
