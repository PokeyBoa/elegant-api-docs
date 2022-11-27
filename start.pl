#! /usr/bin/perl
use strict;
use warnings;

my $options = "docs:dev";

# Delete the .git directory
# The user information in the .git directory will affect the vuepress display
system("rm -rf .git/");

print "1. Build Environment\n";
system("yarn");

print "2. Startup project\n";
system("yarn $options");

