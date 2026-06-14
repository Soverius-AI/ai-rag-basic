import { Pipe, type PipeTransform } from '@angular/core';
import { marked } from 'marked';

// Bound through Angular's HTML sanitizer; no bypassSecurityTrust.
@Pipe({ name: 'markdown', standalone: true })
export class MarkdownPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) return '';
    return marked.parse(value, { async: false, breaks: true, gfm: true }) as string;
  }
}
