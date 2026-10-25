#!/usr/bin/env python3
"""Instantiate the portable Dallas template without network or repository access."""
import argparse
from pathlib import Path
import shutil


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('destination', type=Path)
    parser.add_argument('--palette', choices=['A', 'B', 'C'], default='B')
    args = parser.parse_args()
    source = Path(__file__).resolve().parents[1] / 'assets' / 'template'
    destination = args.destination.expanduser().resolve()
    if destination.exists():
        parser.error('Destination already exists; choose a new directory.')
    if not (source / 'index.html').is_file():
        parser.error('Template assets are missing; reinstall the complete skill folder.')
    shutil.copytree(source, destination)
    page = destination / 'index.html'
    html = page.read_text(encoding='utf-8')
    default = f'<script>if (!location.hash) location.hash = "{args.palette}";</script>'
    page.write_text(html.replace('</head>', default + '\n</head>', 1), encoding='utf-8')
    print(f'Created {destination} (palette {args.palette}).')
    print('Run python3 -m http.server 4311 in this directory, then open http://localhost:4311/.')


if __name__ == '__main__':
    main()
