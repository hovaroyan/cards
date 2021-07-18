zstyle ':completion:*' completer _complete _ignored
zstyle ':completion:*' menu select
zstyle :compinstall filename "$HOME/.zshrc"

autoload -Uz compinit
compinit

# make tab autocomplete menu cycle in reverse
bindkey '^[[Z' reverse-menu-complete

# disable flowcontrol (ctrl+s stops terminal output, and ctrl+q resumes it)
setopt noflowcontrol

# Ignore duplicates in history
setopt HIST_IGNORE_ALL_DUPS

# Load zsh-autosuggestions
source /usr/local/share/zsh-autosuggestions/zsh-autosuggestions.zsh 2>/dev/null

# Load zsh-syntax-highlighting; should be last.
source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh 2>/dev/null
